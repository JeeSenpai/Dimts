import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCaseDecisionDto } from './dto/create-case-decision.dto';
import { UpdateCaseDecisionDto } from './dto/update-case-decision.dto';
import { CaseDecision } from './entities/case-decision.entity';

@Injectable()
export class CaseDecisionService {
  constructor(@InjectRepository(CaseDecision) private readonly caseDecisionRepository: Repository<CaseDecision>){}

  async create(data:any) {
     const toSave = this.caseDecisionRepository.create({
          description: data.description,
          caseType: data.caseType,
          status: data.status
     })

     return await this.caseDecisionRepository.save(toSave)
  }

  async findAllCaseDecisionByCaseType(data: number) {
    return await this.caseDecisionRepository.createQueryBuilder('case_decision')
    .select([
        'case_decision',
        'case_type'
    ])
    .leftJoin('case_decision.caseType', 'case_type' )
    .where('case_decision.caseType =:id', { id: data})
    .getMany();
  }

  async findAll() {
    return await this.caseDecisionRepository.createQueryBuilder('case_decision')
    .select([
      'case_decision',
      'case_type'
    ])
    .leftJoin('case_decision.caseType', 'case_type' )
    .getMany()
  }

  async update(data: any) {
    return await this.caseDecisionRepository.update( data.decisionId ,{ 
        description: data.description,
        caseType: data.caseType,
        status: data.status
    })
  }

  remove(id: number) {
    return `This action removes a #${id} caseDecision`;
  }
}
