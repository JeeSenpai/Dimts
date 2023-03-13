import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCaseTypeDto } from './dto/create-case-type.dto';
import { UpdateCaseTypeDto } from './dto/update-case-type.dto';
import { CaseType } from './entities/case-type.entity';

@Injectable()
export class CaseTypeService {
  constructor(@InjectRepository(CaseType) private readonly caseTypeRepository: Repository<CaseType>){}

  create(createCaseTypeDto: CreateCaseTypeDto) {
    return 'This action adds a new caseType';
  }

  findAll() {
    return this.caseTypeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} caseType`;
  }

  update(id: number, updateCaseTypeDto: UpdateCaseTypeDto) {
    return `This action updates a #${id} caseType`;
  }

  remove(id: number) {
    return `This action removes a #${id} caseType`;
  }
}
