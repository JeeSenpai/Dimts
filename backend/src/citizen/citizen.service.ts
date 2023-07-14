import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { Citizen } from './entities/citizen.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { comparePassword, encodePassword } from 'src/auth/utils/bcrypt';
import { use } from 'passport';

@Injectable()
export class CitizenService {
  constructor(@InjectRepository(Citizen) private readonly citizenRepository: Repository<Citizen>){}

  async create(files: any, data: any) {
    const fileArray = []
    const password = encodePassword(data.password);
    const citizen = this.citizenRepository.create({
        fname: data.fname,
        mname: data.mname,
        lname: data.lname,
        age: data.age,
        contact_no: data.contact_no,
        address: data.address,
        email: data.email,
        username: data.username,
        password: password,
    })

    const fileRow = await this.citizenRepository.save(citizen);

    for(var i = 0; i < files.length; i++ ){
       var obj = ""
       obj = files[i].filename
       fileArray.push(obj)
    } 

    this.citizenRepository.update(fileRow.id, {valid_id: JSON.stringify(fileArray)});
  }

  async createCitizenByAdmin(data: any){
      const password = encodePassword('dimts123');
      const save = this.citizenRepository.create({
        fname: data.fname,
        mname: data.mname,
        lname: data.lname,
        age: data.age,
        contact_no: data.contact_no,
        address: data.address,
        email: data.email,
        username: data.fname + data.lname,
        password: password,
      })
      
      return await this.citizenRepository.save(save)
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
            const citizen = {
               citizenData: null
            }
            citizen.citizenData = user
            return citizen
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

  async findOne(id: number) {
    return await this.citizenRepository.createQueryBuilder('citizen')
    .where('citizen.id =:id', { id })
    .getOne()
  }

  async updateCitizenByAdmin(data: any) {
    return await this.citizenRepository.update(data.citizenId, {
      fname: data.fname,
      mname: data.mname,
      lname: data.lname,
      age: data.age,
      contact_no: data.contact_no,
      address: data.address,
      email: data.email,
      username: data.fname + data.lname,
    })
  }

}
