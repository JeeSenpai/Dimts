import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProceedingDto } from './dto/create-proceeding.dto';
import { UpdateProceedingDto } from './dto/update-proceeding.dto';
import { Proceeding } from './entities/proceeding.entity';

@Injectable()
export class ProceedingsService {
  constructor(@InjectRepository(Proceeding) private readonly proceedingRepository: Repository<Proceeding>){}

  async create(data: any) {
    const save = this.proceedingRepository.create({
        case: data.caseId,
        caseDecision: data.caseDecision,
        last_court_action: data.last_court_action,
        minimum_sentence: data.minimum_sentence,
        minimum_duration: data.minimum_duration,
        maximum_sentence: data.maximum_sentence,
        maximum_duration: data.maximum_duration,
        minimum_fines: data.minimum_fines,
        maximum_fines: data.maximum_fines,
        remarks: data.remarks
    });

    return await this.proceedingRepository.save(save)
  }

  findAll() {
    return `This action returns all proceedings`;
  }

  async findOne( caseId: number) {
    return await this.proceedingRepository.createQueryBuilder('proceeding')
    .select([
       'proceeding',
       'case',
       'case_type',
       'case_decision'
    ])
    .leftJoin('proceeding.case', 'case')
    .leftJoin('case.caseType', 'case_type')
    .leftJoin('proceeding.caseDecision', 'case_decision')
    .where('proceeding.case =:id', { id: caseId })
    .orderBy('proceeding.id', 'DESC')
    .getMany();
  }

  async update(data: any) {
    return await this.proceedingRepository.update( data.proceedingId, {
      case: data.caseId,
      caseDecision: data.caseDecision,
      last_court_action: data.last_court_action,
      minimum_sentence: data.minimum_sentence,
      minimum_duration: data.minimum_duration,
      maximum_sentence: data.maximum_sentence,
      maximum_duration: data.maximum_duration,
      minimum_fines: data.minimum_fines,
      maximum_fines: data.maximum_fines,
      remarks: data.remarks
    });
  }

  remove(id: number) {
    return `This action removes a #${id} proceeding`;
  }
}
