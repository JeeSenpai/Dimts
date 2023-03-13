import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HearingTypesService } from './hearing-types.service';
import { CreateHearingTypeDto } from './dto/create-hearing-type.dto';
import { UpdateHearingTypeDto } from './dto/update-hearing-type.dto';

@Controller('hearing-types')
export class HearingTypesController {
  constructor(private readonly hearingTypesService: HearingTypesService) {}

  @Post()
  create(@Body() createHearingTypeDto: CreateHearingTypeDto) {
    return this.hearingTypesService.create(createHearingTypeDto);
  }

  @Get()
  findAll() {
    return this.hearingTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hearingTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHearingTypeDto: UpdateHearingTypeDto) {
    return this.hearingTypesService.update(+id, updateHearingTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hearingTypesService.remove(+id);
  }
}
