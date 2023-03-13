import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourtHearingsService } from './court-hearings.service';
import { CreateCourtHearingDto } from './dto/create-court-hearing.dto';
import { UpdateCourtHearingDto } from './dto/update-court-hearing.dto';

@Controller('court-hearings')
export class CourtHearingsController {
  constructor(private readonly courtHearingsService: CourtHearingsService) {}

  @Post()
  create(@Body() data: any) {
    return this.courtHearingsService.create(data);
  }

  @Get()
  findAll() {
    return this.courtHearingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courtHearingsService.findOne(+id);
  }

  @Patch()
  update(@Body() data: any) {
    return this.courtHearingsService.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courtHearingsService.remove(+id);
  }
}
