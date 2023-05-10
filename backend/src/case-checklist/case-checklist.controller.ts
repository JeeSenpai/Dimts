import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaseChecklistService } from './case-checklist.service';
import { CreateCaseChecklistDto } from './dto/create-case-checklist.dto';
import { UpdateCaseChecklistDto } from './dto/update-case-checklist.dto';

@Controller('case-checklist')
export class CaseChecklistController {
  constructor(private readonly caseChecklistService: CaseChecklistService) {}

  @Post()
  create(@Body() createCaseChecklistDto: CreateCaseChecklistDto) {
    return this.caseChecklistService.create(createCaseChecklistDto);
  }

  @Get()
  findAll() {
    return this.caseChecklistService.findAll();
  }

  @Get('findAllChecklistByCaseTag/:id')
  findAllChecklistByCaseTag(@Param('id') id: number){
    return this.caseChecklistService.findAllChecklistByCaseTag(id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caseChecklistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaseChecklistDto: UpdateCaseChecklistDto) {
    return this.caseChecklistService.update(+id, updateCaseChecklistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caseChecklistService.remove(+id);
  }
}
