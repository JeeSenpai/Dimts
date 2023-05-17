import { Injectable } from '@nestjs/common';
import { CreateCaseChecklistDto } from './dto/create-case-checklist.dto';
import { UpdateCaseChecklistDto } from './dto/update-case-checklist.dto';
import { CaseChecklist } from './entities/case-checklist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CaseChecklistService {
  constructor(@InjectRepository(CaseChecklist) private readonly caseCheckRepository: Repository<CaseChecklist>){}

  async create(data: any) {
    const save = this.caseCheckRepository.create({
        caseTag: data.caseTag,
        description: data.description,
        minPenalty: data.minPenalty,
        maxPenalty: data.maxPenalty,
        status: data.status
    })
    return await this.caseCheckRepository.save(save)
  }

  findAll() {
    return `This action returns all caseChecklist`;
  }

  async findAllChecklistByCaseTag(id: number) {
    return await this.caseCheckRepository.createQueryBuilder('case_checklist')
    .select([
       'case_checklist',
    ])
    .where('case_checklist.caseTag =:id', {id})
    .getMany()
  }

  async findAllActiveChecklistByCaseTag(id: number) {
    return await this.caseCheckRepository.createQueryBuilder('case_checklist')
    .select([
       'case_checklist',
       'case_tag'
    ])
    .leftJoin('case_checklist.caseTag', 'case_tag')
    .where('case_checklist.caseTag =:id', {id})
    .andWhere('case_checklist.status = true')
    .getMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} caseChecklist`;
  }

  async update(data: any) {
    return await this.caseCheckRepository.update( data.id, {
      caseTag: data.caseTag,
      description: data.description,
      minPenalty: data.minPenalty,
      maxPenalty: data.maxPenalty,
      status: data.status
    })
  }

  remove(id: number) {
    return `This action removes a #${id} caseChecklist`;
  }
}
