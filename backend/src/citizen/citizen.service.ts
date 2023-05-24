import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { Citizen } from './entities/citizen.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { comparePassword } from 'src/auth/utils/bcrypt';
import { use } from 'passport';

@Injectable()
export class CitizenService {
  constructor(@InjectRepository(Citizen) private readonly citizenRepository: Repository<Citizen>){}

  async create(files: any, data: any) {
    const fileArray = []
    const citizen = this.citizenRepository.create({
        fname: data.fname,
        mname: data.mname,
        lname: data.lname,
        age: data.age,
        contact_no: data.contact_no,
        address: data.address,
        email: data.email,
        username: data.usename,
        password: data.password,
    })

    const fileRow = await this.citizenRepository.save(citizen);

    for(var i = 0; i < files.length; i++ ){
       var obj = ""
       obj = files[i].filename
       fileArray.push(obj)
    } 

    this.citizenRepository.update(fileRow.id, {valid_id: JSON.stringify(fileArray)});
  }

  async findUserByUsername(username: any){
     this.citizenRepository.createQueryBuilder('citizen')
      .select([
        'citizen'
      ])
      .where('citizen.').where('citizen.username =:username', { username })
      .getOne()
  }

  async login(username: any, password: any){
    const user = await this.citizenRepository.createQueryBuilder('citizen')
    .select([
      'citizen'
    ])
    .where('citizen.username =:username', { username })
    .getOne()

    if(user){
        const matched = comparePassword(password, user.password);
        if(matched){
            return user
        }
        else{
          return new HttpException('Password not match', HttpStatus.CONFLICT);
        }
    }
    else{
      return new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async findAll() {
    return await this.citizenRepository.createQueryBuilder('citizen')
    .orderBy('citizen.created_at')
    .getMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} citizen`;
  }

  update(id: number, updateCitizenDto: UpdateCitizenDto) {
    return `This action updates a #${id} citizen`;
  }

}
