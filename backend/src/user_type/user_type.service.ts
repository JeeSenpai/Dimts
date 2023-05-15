import { Injectable } from '@nestjs/common';
import { CreateUserTypeDto } from './dto/create-user_type.dto';
import { UpdateUserTypeDto } from './dto/update-user_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from './entities/user_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserTypeService {
  constructor(@InjectRepository(UserType) private readonly userTypeRepository: Repository<UserType>){}
  create(createUserTypeDto: CreateUserTypeDto) {
    return 'This action adds a new userType';
  }

  async findAll() {
    return await this.userTypeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} userType`;
  }

  update(id: number, updateUserTypeDto: UpdateUserTypeDto) {
    return `This action updates a #${id} userType`;
  }

  remove(id: number) {
    return `This action removes a #${id} userType`;
  }
}
