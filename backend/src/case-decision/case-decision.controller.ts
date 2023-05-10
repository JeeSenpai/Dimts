import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaseDecisionService } from './case-decision.service';
import { CreateCaseDecisionDto } from './dto/create-case-decision.dto';
import { UpdateCaseDecisionDto } from './dto/update-case-decision.dto';

@Controller('case-decision')
export class CaseDecisionController {
  constructor(private readonly caseDecisionService: CaseDecisionService) {}

  @Post()
  create(@Body() data: any) {
    return this.caseDecisionService.create(data);
  }

  @Get('findAllCaseDecisionByCaseType/:id')
  findAllCaseDecisionByCaseType(@Param('id') caseType: number){
    return this.caseDecisionService.findAllCaseDecisionByCaseType(caseType)
  }

  @Get()
  findAll() {
    return this.caseDecisionService.findAll();
  }

  @Post('update')
  update(@Body() data: any) {
    return this.caseDecisionService.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caseDecisionService.remove(+id);
  }
}
