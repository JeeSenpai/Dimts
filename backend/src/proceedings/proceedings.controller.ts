import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProceedingsService } from './proceedings.service';
import { CreateProceedingDto } from './dto/create-proceeding.dto';
import { UpdateProceedingDto } from './dto/update-proceeding.dto';

@Controller('proceedings')
export class ProceedingsController {
  constructor(private readonly proceedingsService: ProceedingsService) {}

  @Post()
  create(@Body() data: any) {
    return this.proceedingsService.create(data);
  }

  @Get()
  findAll() {
    return this.proceedingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.proceedingsService.findOne(id);
  }

  @Patch()
  update(@Body() data: any) {
    return this.proceedingsService.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proceedingsService.remove(+id);
  }
}
