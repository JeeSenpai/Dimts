import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfficesService } from './offices.service';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';

@Controller('offices')
export class OfficesController {
  constructor(private readonly officesService: OfficesService) {}

  @Post()
  create(@Body() data: any) {
    return this.officesService.create(data);
  }

  @Get()
  findAll() {
    return this.officesService.findAll();
  }

  @Get('active')
  findAllActive() {
    return this.officesService.findAllActive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.officesService.findOne(+id);
  }

  @Post('update')
  update(@Body() data: any) {
    return this.officesService.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.officesService.remove(+id);
  }
}
