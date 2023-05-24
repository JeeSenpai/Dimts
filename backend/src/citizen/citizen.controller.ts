import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';


@Controller('citizen')
export class CitizenController {
  constructor(private readonly citizenService: CitizenService) {}

  @Post()
  create(@Body() createCitizenDto: CreateCitizenDto) {
    return this.citizenService.create(createCitizenDto);
  }

  @Get('citizenLogin/:username/:password')
  citizenLogin(@Param('username') username: any, @Param('password') password: any){
    return this.citizenService.login(username, password)
  }

  @Get()
  findAll() {
    return this.citizenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citizenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCitizenDto: UpdateCitizenDto) {
    return this.citizenService.update(+id, updateCitizenDto);
  }

}
