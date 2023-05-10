import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RaffledCourtService } from './raffled-court.service';
import { CreateRaffledCourtDto } from './dto/create-raffled-court.dto';
import { UpdateRaffledCourtDto } from './dto/update-raffled-court.dto';

@Controller('raffled-court')
export class RaffledCourtController {
  constructor(private readonly raffledCourtService: RaffledCourtService) {}

  @Post()
  create(@Body() data: any) {
    return this.raffledCourtService.create(data);
  }

  @Get()
  findAll() {
    return this.raffledCourtService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.raffledCourtService.findOne(+id);
  }

  @Post('update')
  update(@Body() data: any) {
    return this.raffledCourtService.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.raffledCourtService.remove(+id);
  }
}
