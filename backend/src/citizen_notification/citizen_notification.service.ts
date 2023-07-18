import { Injectable } from '@nestjs/common';
import { CreateCitizenNotificationDto } from './dto/create-citizen_notification.dto';
import { UpdateCitizenNotificationDto } from './dto/update-citizen_notification.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CitizenNotification } from './entities/citizen_notification.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitizenNotificationService {
  constructor(@InjectRepository(CitizenNotification) private readonly citizenNotifRepository: Repository<CitizenNotification>,){}
  
  create(createCitizenNotificationDto: CreateCitizenNotificationDto) {
    return 'This action adds a new citizenNotification';
  }

  findAll() {
    return `This action returns all citizenNotification`;
  }

  async findNotifByCaseId(id: number){
     return await this.citizenNotifRepository.createQueryBuilder('citizen_monitor')
     .select([
        'citizen_monitor',
        'case'
     ])
     .leftJoin('citizen_monitor.case', 'case')
     .where('citizen_monitor.citizen =:id', { id })
     .orderBy('citizen_monitor.id')
     .getMany()
  }

  async updateIsClicked(id: any){
    return await this.citizenNotifRepository.update(id, {
       isClicked: true
    })
}

  findOne(id: number) {
    return `This action returns a #${id} citizenNotification`;
  }

  update(id: number, updateCitizenNotificationDto: UpdateCitizenNotificationDto) {
    return `This action updates a #${id} citizenNotification`;
  }

  remove(id: number) {
    return `This action removes a #${id} citizenNotification`;
  }
}
