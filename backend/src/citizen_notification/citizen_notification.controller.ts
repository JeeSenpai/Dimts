import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitizenNotificationService } from './citizen_notification.service';
import { CreateCitizenNotificationDto } from './dto/create-citizen_notification.dto';
import { UpdateCitizenNotificationDto } from './dto/update-citizen_notification.dto';

@Controller('citizen-notification')
export class CitizenNotificationController {
  constructor(private readonly citizenNotificationService: CitizenNotificationService) {}

  @Post()
  create(@Body() createCitizenNotificationDto: CreateCitizenNotificationDto) {
    return this.citizenNotificationService.create(createCitizenNotificationDto);
  }

  @Get()
  findAll() {
    return this.citizenNotificationService.findAll();
  }

  @Get('findNotifByCaseId/:id')
  findNotifByCaseId(@Param('id') id: number ){
    return this.citizenNotificationService.findNotifByCaseId(id)
  }

  @Patch('updateIsClicked/:id')
  updateIsClicked(@Param('id') id: any){
    return this.citizenNotificationService.updateIsClicked(id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citizenNotificationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCitizenNotificationDto: UpdateCitizenNotificationDto) {
    return this.citizenNotificationService.update(+id, updateCitizenNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citizenNotificationService.remove(+id);
  }
}
