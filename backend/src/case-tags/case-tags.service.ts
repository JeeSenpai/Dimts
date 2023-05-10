import { Injectable } from '@nestjs/common';
import { CreateCaseTagDto } from './dto/create-case-tag.dto';
import { UpdateCaseTagDto } from './dto/update-case-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CaseTag } from './entities/case-tag.entity';

@Injectable()
export class CaseTagsService {
  constructor(@InjectRepository(CaseTag) private readonly caseTagRepository: Repository<CaseTag>){}
  
  create(createCaseTagDto: CreateCaseTagDto) {
    return 'This action adds a new caseTag';
  }

  async findAllTagsByCaseType(id: number) {
    return await this.caseTagRepository.createQueryBuilder('case_tag')
    .select([
       'case_tag',
       'case_type'
    ])
    .leftJoin('case_tag.caseType', 'case_type')
    .where('case_tag.caseType =:id', { id })
    .orderBy('case_tag.description', 'ASC')
    .getMany();
  }

  findAll(){

  }

  findOne(id: number) {
    return `This action returns a #${id} caseTag`;
  }

  update(id: number, updateCaseTagDto: UpdateCaseTagDto) {
    return `This action updates a #${id} caseTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} caseTag`;
  }
}
