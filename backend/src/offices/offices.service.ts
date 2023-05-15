import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { Office } from './entities/office.entity';

@Injectable()
export class OfficesService {
  constructor(@InjectRepository(Office) private readonly officeRepository: Repository<Office>){}

  async create(data:any) {
    const toSave = this.officeRepository.create({
         description: data.description,
         status: data.status
    })

    return await this.officeRepository.save(toSave)
 }

  findAll() {
    return this.officeRepository.find();
  }

  findAllActive() {
    return this.officeRepository.createQueryBuilder('office')
    .where('office.status = true')
    .getMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} office`;
  }

  async update(data: any) {
    return await this.officeRepository.update( data.officeId ,{ 
        description: data.description,
        status: data.status
    })
  }

  remove(id: number) {
    return `This action removes a #${id} office`;
  }
}
