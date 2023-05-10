import { Injectable } from '@nestjs/common';
import { CreateCaseChecklistDto } from './dto/create-case-checklist.dto';
import { UpdateCaseChecklistDto } from './dto/update-case-checklist.dto';
import { CaseChecklist } from './entities/case-checklist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CaseTag } from 'src/case-tags/entities/case-tag.entity';

@Injectable()
export class CaseChecklistService {
  constructor(@InjectRepository(CaseChecklist) private readonly caseCheckRepository: Repository<CaseTag>){}

  create(createCaseChecklistDto: CreateCaseChecklistDto) {
    return 'This action adds a new caseChecklist';
  }

  findAll() {
    return `This action returns all caseChecklist`;
  }

  async findAllChecklistByCaseTag(id: number) {
    return await this.caseCheckRepository.createQueryBuilder('case_checklist')
    .select([
       'case_checklist',
       'case_tag'
    ])
    .leftJoin('case_checklist.caseTag', 'case_tag')
    .where('case_checklist.caseTag =:id', {id})
    .getMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} caseChecklist`;
  }

  update(id: number, updateCaseChecklistDto: UpdateCaseChecklistDto) {
    return `This action updates a #${id} caseChecklist`;
  }

  remove(id: number) {
    return `This action removes a #${id} caseChecklist`;
  }
}
