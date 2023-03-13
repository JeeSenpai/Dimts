import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RaffledCourtService } from './raffled-court.service';
import { CreateRaffledCourtDto } from './dto/create-raffled-court.dto';
import { UpdateRaffledCourtDto } from './dto/update-raffled-court.dto';

@Controller('raffled-court')
export class RaffledCourtController {
  constructor(private readonly raffledCourtService: RaffledCourtService) {}

  @Post()
  create(@Body() createRaffledCourtDto: CreateRaffledCourtDto) {
    return this.raffledCourtService.create(createRaffledCourtDto);
  }

  @Get()
  findAll() {
    return this.raffledCourtService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.raffledCourtService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRaffledCourtDto: UpdateRaffledCourtDto) {
    return this.raffledCourtService.update(+id, updateRaffledCourtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.raffledCourtService.remove(+id);
  }
}
