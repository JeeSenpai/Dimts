import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JudgesService } from './judges.service';
import { CreateJudgeDto } from './dto/create-judge.dto';
import { UpdateJudgeDto } from './dto/update-judge.dto';

@Controller('judges')
export class JudgesController {
  constructor(private readonly judgesService: JudgesService) {}

  @Post()
  create(@Body() data: any) {
    return this.judgesService.create(data);
  }

  @Get()
  findAll() {
    return this.judgesService.findAll();
  }

  @Get('active')
  findAllActive() {
    return this.judgesService.findAllActive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.judgesService.findOne(+id);
  }

  @Post('update')
  update(@Body() data: any) {
    return this.judgesService.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.judgesService.remove(+id);
  }
}
