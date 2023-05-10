import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHearingTypeDto } from './dto/create-hearing-type.dto';
import { UpdateHearingTypeDto } from './dto/update-hearing-type.dto';
import { HearingType } from './entities/hearing-type.entity';

@Injectable()
export class HearingTypesService {
  constructor(@InjectRepository(HearingType) private readonly hearingTypeRepository: Repository<HearingType>){}
  
  async create(data:any) {
    const toSave = this.hearingTypeRepository.create({
         description: data.description,
         status: data.status
    })

    return await this.hearingTypeRepository.save(toSave)
 }


  async findAll() {
    return await this.hearingTypeRepository.find();
  }

  async findAllActive(){
    return await this.hearingTypeRepository.createQueryBuilder('hearing_type')
    .select([
       'hearing_type'
    ])
    .where('hearing_type.status = true')
    .getMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} hearingType`;
  }

  async update(data: any) {
    return await this.hearingTypeRepository.update( data.hearingTypeId ,{ 
        description: data.description,
        status: data.status
    })
  }

  remove(id: number) {
    return `This action removes a #${id} hearingType`;
  }
}
