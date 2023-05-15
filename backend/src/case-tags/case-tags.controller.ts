import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaseTagsService } from './case-tags.service';
import { CreateCaseTagDto } from './dto/create-case-tag.dto';
import { UpdateCaseTagDto } from './dto/update-case-tag.dto';

@Controller('case-tags')
export class CaseTagsController {
  constructor(private readonly caseTagsService: CaseTagsService) {}

  @Post()
  create(@Body() data: any) {
    return this.caseTagsService.create(data);
  }

  @Get('findAllTagsByCaseType/:id')
  findAllTagsByCaseType(@Param('id') id: number){
     return this.caseTagsService.findAllTagsByCaseType(id)
  }

  @Get()
  findAll() {
    return this.caseTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caseTagsService.findOne(+id);
  }

  @Post('update')
  update(@Body() data: any) {
    return this.caseTagsService.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caseTagsService.remove(+id);
  }
}
