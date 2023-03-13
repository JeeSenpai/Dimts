import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encodePassword } from 'src/auth/utils/bcrypt';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserDetails } from './entities/user_detail.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,
              @InjectRepository(UserDetails) private readonly userDetailsRepository: Repository<UserDetails>){}
            
  async create(User: any) {
     const password = encodePassword(User.password);
     const newUserDetails = this.userDetailsRepository.create({
         fname: User.fname,
         mname: User.mname,
         lname: User.lname    
    });
    const user = await this.userDetailsRepository.save(newUserDetails);

    const newUserSec = this.userRepository.create({
          email: User.email,
          password: password,
          isValidated: User.isValidated,
          otpVerified: User.otpVerified,
          userDetails: user,
          status: true
     });
     const newUser = await this.userRepository.save(newUserSec) 
     return newUser;
  }

  findAll(){

  }

  findUserByEmail(email: string): Promise<any>{
    return this.userRepository.createQueryBuilder('user')
    .select([
      'user',
      'user_details',
      'user_type'
     ])
     .leftJoin('user.userDetails', 'user_details')
     .leftJoin('user_details.userType', 'user_type')
     .where('user.email = :email ', { email })
     .getOne();
  }

  findOne(id: number) {
    return this.userRepository.createQueryBuilder('user')
    .select([
      'user',
      'user_details',
      'user_type'
     ])
     .leftJoin('user.userDetails', 'user_details')
     .leftJoin('user_details.userType', 'user_type')
     .where('user.id = :id ', { id })
     .getOne();
  }

  async updateOtp(id: number): Promise<any> {
    const updatedOtp = await this.userRepository.update(id, {otpVerified: true})
    if(updatedOtp){
     return new HttpException('OTP Verified Succesfully', HttpStatus.CREATED)
   }
 }
}