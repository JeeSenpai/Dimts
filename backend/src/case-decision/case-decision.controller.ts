import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaseDecisionService } from './case-decision.service';
import { CreateCaseDecisionDto } from './dto/create-case-decision.dto';
import { UpdateCaseDecisionDto } from './dto/update-case-decision.dto';

@Controller('case-decision')
export class CaseDecisionController {
  constructor(private readonly caseDecisionService: CaseDecisionService) {}

  @Post()
  create(@Body() createCaseDecisionDto: CreateCaseDecisionDto) {
    return this.caseDecisionService.create(createCaseDecisionDto);
  }

  @Get()
  findAll() {
    return this.caseDecisionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caseDecisionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaseDecisionDto: UpdateCaseDecisionDto) {
    return this.caseDecisionService.update(+id, updateCaseDecisionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caseDecisionService.remove(+id);
  }
}
