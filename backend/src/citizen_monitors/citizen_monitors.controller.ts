import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitizenMonitorsService } from './citizen_monitors.service';
import { CreateCitizenMonitorDto } from './dto/create-citizen_monitor.dto';
import { UpdateCitizenMonitorDto } from './dto/update-citizen_monitor.dto';

@Controller('citizen-monitors')
export class CitizenMonitorsController {
  constructor(private readonly citizenMonitorsService: CitizenMonitorsService) {}

  @Post()
  create(@Body() createCitizenMonitorDto: CreateCitizenMonitorDto) {
    return this.citizenMonitorsService.create(createCitizenMonitorDto);
  }

  @Get()
  findAll() {
    return this.citizenMonitorsService.findAll();
  }
  @Get('findAllMonitorByCitizen/:id')
  findAllMonitorByCitizen(@Param('id') id: number){
    return this.citizenMonitorsService.findAllMonitorByCitizen(id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citizenMonitorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCitizenMonitorDto: UpdateCitizenMonitorDto) {
    return this.citizenMonitorsService.update(+id, updateCitizenMonitorDto);
  }

  @Patch('verifyCitizen/:id')
  verifyCitizen(@Param('id') id: number){
    return this.citizenMonitorsService.verifyCitizen(id)
  }

  @Patch('unverifyCitizen/:id')
  unverifyCitizen(@Param('id') id: number){
    return this.citizenMonitorsService.unverifyCitizen(id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citizenMonitorsService.remove(+id);
  }
}
