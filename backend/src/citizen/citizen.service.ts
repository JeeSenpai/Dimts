import { Injectable } from '@nestjs/common';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { Citizen } from './entities/citizen.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CitizenService {
  constructor(@InjectRepository(Citizen) private readonly citizenRepository: Repository<Citizen>){}

  create(createCitizenDto: CreateCitizenDto) {
    return 'This action adds a new citizen';
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

  remove(id: number) {
    return `This action removes a #${id} citizen`;
  }
}
