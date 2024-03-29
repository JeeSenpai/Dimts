import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitizenMonitorsService } from './citizen_monitors.service';
import { CreateCitizenMonitorDto } from './dto/create-citizen_monitor.dto';
import { UpdateCitizenMonitorDto } from './dto/update-citizen_monitor.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Citizen Monitor')
@Controller('citizen-monitors')
export class CitizenMonitorsController {
  constructor(private readonly citizenMonitorsService: CitizenMonitorsService) {}

  @Post('createCitizenMonitor/:citizenId/:caseNum/:relation')
  create(@Param('citizenId') citizenId: number, @Param('caseNum') caseNum: string, @Param('relation') relation: string) {
    return this.citizenMonitorsService.create(citizenId,caseNum,relation);
  }

  @Get('findAllMonitorByCitizen/:id')
  findAllMonitorByCitizen(@Param('id') id: number){
    return this.citizenMonitorsService.findAllMonitorByCitizen(id)
  }

  @Post('findAllMonitorByCitizenInMobile/:citizenID')
  findAllMonitorByCitizenInMobile(@Param('citizenID') id: number){
    return this.citizenMonitorsService.findAllMonitorByCitizenInMobile(id)
  }

  @Post('createCitizenMonitorByAdmin')
  createCitizenMonitorByAdmin(@Body() data: any){
     return this.citizenMonitorsService.createCitizenMonitorByAdmin(data)
  }

  @Post('updateCitizenMonitorByAdmin')
  updateCitizenMonitorByAdmin(@Body() data: any){
     return this.citizenMonitorsService.updateCitizenMonitorByAdmin(data)
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
  remove(@Param('id') id: number) {
    return this.citizenMonitorsService.remove(id);
  }
}
