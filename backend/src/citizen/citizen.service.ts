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

  create(createCitizenDto: CreateCitizenDto) {
    return 'This action adds a new citizen';
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
