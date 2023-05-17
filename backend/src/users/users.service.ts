import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encodePassword } from '../auth/utils/bcrypt';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserDetails } from './entities/user_detail.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,
              @InjectRepository(UserDetails) private readonly userDetailsRepository: Repository<UserDetails>){}
            
  async create(data: any) {
     const password = encodePassword('dimts123');
     const newUserDetails = this.userDetailsRepository.create({ 
         fname: data.fname,
         mname: data.mname,
         lname: data.lname,
         userType: data.usertype,
         office: data.office   
    });
    const user = await this.userDetailsRepository.save(newUserDetails);

    const newUserSec = this.userRepository.create({
          email: data.username,
          password: password,
          isValidated: true,
          otpVerified: true,
          userDetails: user,
          status: data.status
     });
     const newUser = await this.userRepository.save(newUserSec) 
     return newUser;
  }

  async update(data: any){
     await this.userDetailsRepository.update(data.accountDetailsId, {
        fname: data.fname,
        mname: data.mname,
        lname: data.lname,
        userType: data.usertype,
        office: data.office 
     })

     return await this.userRepository.update(data.accountId, {
          email: data.username,
          status: data.status
     });
  }

  findAll(){
    return this.userRepository.createQueryBuilder('user')
    .select([
      'user',
      'user_details',
      'user_type',
      'office'
     ])
     .leftJoin('user.userDetails', 'user_details')
     .leftJoin('user_details.userType', 'user_type')
     .leftJoin('user_details.office', 'office')
     .getMany();
  }

  findUserByEmail(email: string): Promise<any>{
    return this.userRepository.createQueryBuilder('user')
    .select([
      'user',
      'user_details',
      'user_type',
      'office'
     ])
     .leftJoin('user.userDetails', 'user_details')
     .leftJoin('user_details.userType', 'user_type')
     .leftJoin('user_details.office', 'office')
     .where('user.email = :email ', { email })
     .getOne();
  }

  findOne(id: number) {
    return this.userRepository.createQueryBuilder('user')
    .select([
      'user',
      'user_details',
      'user_type',
      'office'
     ])
     .leftJoin('user.userDetails', 'user_details')
     .leftJoin('user_details.userType', 'user_type')
     .leftJoin('user_details.office', 'office')
     .where('user.id = :id ', { id })
     .getOne();
  }

  async updateOtp(id: number): Promise<any> {
    const updatedOtp = await this.userRepository.update(id, {otpVerified: true})
    if(updatedOtp){
     return new HttpException('OTP Verified Succesfully', HttpStatus.CREATED)
   }
 }

 async resetPassword(id: number){
    const password = encodePassword('dimts123')
    return await this.userRepository.update( id, { password: password })
 }
}