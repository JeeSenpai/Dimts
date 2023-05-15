import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HearingTypesService } from './hearing-types.service';
import { CreateHearingTypeDto } from './dto/create-hearing-type.dto';
import { UpdateHearingTypeDto } from './dto/update-hearing-type.dto';

@Controller('hearing-types')
export class HearingTypesController {
  constructor(private readonly hearingTypesService: HearingTypesService) {}

  @Post()
  create(@Body() data: any) {
    return this.hearingTypesService.create(data);
  }

  @Get()
  findAll() {
    return this.hearingTypesService.findAll();
  }

  @Get('active')
  findAllActive() {
    return this.hearingTypesService.findAllActive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hearingTypesService.findOne(+id);
  }

  @Post('update')
  update(@Body() data: any) {
    return this.hearingTypesService.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hearingTypesService.remove(+id);
  }
}
