import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from '../documents/entities/document.entity';
import { Notification } from './entities/notification.entity';
import { Office } from '../offices/entities/office.entity';

@Injectable()
export class NotificationsService {
  constructor(@InjectRepository(Document) private readonly documentRepository: Repository<Document>,
              @InjectRepository(Notification) private readonly notifRepository: Repository<Notification>){}

  create(createNotificationDto: CreateNotificationDto) {
    return 'This action adds a new notification';
  }

  async findAllNotficationForAdmin(){
    return await this.notifRepository.createQueryBuilder('notification')
    .select([
        'notification',
        'citizen_monitor',
        'citizen',
        'case'
    ])
    .leftJoin('notification.monitor', 'citizen_monitor')
    .leftJoin('citizen_monitor.citizen', 'citizen')
    .leftJoin('citizen_monitor.case', 'case')
    .where('notification.notif_type = 3')
    .orderBy('notification.created_at', 'DESC')
    .getMany()
  }

  async findAllNotficationForOffice(officeId: number){
      return await this.notifRepository.createQueryBuilder('notification')
      .select([
          'notification',
          'document',
          'office',
          'case'
      ])
      .leftJoin('notification.document', 'document')
      .leftJoin('document.office', 'office')
      .leftJoinAndMapOne('document.fromOffice', Office, 'from_office', 'from_office.id = document.fromOffice')
      .leftJoin('document.case', 'case')
      .where('notification.notif_for =:officeId', { officeId })
      .orderBy('notification.created_at', 'DESC')
      .getMany()
  }

  async updateIsClicked(id: any){
      return await this.notifRepository.update(id, {
         is_clicked: true
      })
  }

  findAll() {
    return `This action returns all notifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
