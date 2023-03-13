import { Injectable } from '@nestjs/common';
import { CreateCaseStatusDto } from './dto/create-case-status.dto';
import { UpdateCaseStatusDto } from './dto/update-case-status.dto';

@Injectable()
export class CaseStatusService {
  create(createCaseStatusDto: CreateCaseStatusDto) {
    return 'This action adds a new caseStatus';
  }

  findAll() {
    return `This action returns all caseStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} caseStatus`;
  }

  update(id: number, updateCaseStatusDto: UpdateCaseStatusDto) {
    return `This action updates a #${id} caseStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} caseStatus`;
  }
}
