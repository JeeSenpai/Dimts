import { Injectable } from '@nestjs/common';
import { CreateCaseDecisionDto } from './dto/create-case-decision.dto';
import { UpdateCaseDecisionDto } from './dto/update-case-decision.dto';

@Injectable()
export class CaseDecisionService {
  create(createCaseDecisionDto: CreateCaseDecisionDto) {
    return 'This action adds a new caseDecision';
  }

  findAll() {
    return `This action returns all caseDecision`;
  }

  findOne(id: number) {
    return `This action returns a #${id} caseDecision`;
  }

  update(id: number, updateCaseDecisionDto: UpdateCaseDecisionDto) {
    return `This action updates a #${id} caseDecision`;
  }

  remove(id: number) {
    return `This action removes a #${id} caseDecision`;
  }
}
