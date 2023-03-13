import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHearingTypeDto } from './dto/create-hearing-type.dto';
import { UpdateHearingTypeDto } from './dto/update-hearing-type.dto';
import { HearingType } from './entities/hearing-type.entity';

@Injectable()
export class HearingTypesService {
  constructor(@InjectRepository(HearingType) private readonly hearingTypeRepository: Repository<HearingType>){}
  
  create(createHearingTypeDto: CreateHearingTypeDto) {
    return 'This action adds a new hearingType';
  }

  async findAll() {
    return await this.hearingTypeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} hearingType`;
  }

  update(id: number, updateHearingTypeDto: UpdateHearingTypeDto) {
    return `This action updates a #${id} hearingType`;
  }

  remove(id: number) {
    return `This action removes a #${id} hearingType`;
  }
}
