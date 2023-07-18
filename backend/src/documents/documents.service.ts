import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Document } from './entities/document.entity';
import { Notification } from '../notifications/entities/notification.entity';
import { Office } from '../offices/entities/office.entity';
import { User } from '../users/entities/user.entity';
import { MailService } from '../mail/mail.service';
import { CitizenNotification } from '../citizen_notification/entities/citizen_notification.entity';
import { CitizenMonitor } from '../citizen_monitors/entities/citizen_monitor.entity';

@Injectable()
export class DocumentsService {
  constructor(@InjectRepository(Document) private readonly documentRepository: Repository<Document>,
              @InjectRepository(Notification) private readonly notifRepository: Repository<Notification>,
              @InjectRepository(User) private readonly userRepository: Repository<User>,
              @InjectRepository(CitizenNotification) private readonly citizenNotifRepository: Repository<CitizenNotification>,
              @InjectRepository(CitizenMonitor) private readonly citizenMonitorRepository: Repository<CitizenMonitor>,
              private mailService: MailService){}


  async create(data: any) {

    const monitor = await this.citizenMonitorRepository.createQueryBuilder('citizen_monitor')
    .select([
       'citizen_monitor',
       'citizen',
       'case'
    ])
    .leftJoin('citizen_monitor.citizen', 'citizen')
    .leftJoin('citizen_monitor.case', 'case')
    .where('citizen_monitor.case =:id', { id: data.caseId })
    .andWhere('citizen_monitor.is_verified = true')
    .getMany()

    for (let i = 0; i < monitor.length; i++) {
      const notif = this.citizenNotifRepository.create({
        case: data.caseId,
        citizen: monitor[i].citizen.id,
        description: 'There is a new document served on your verified monitored case',
        isViewed: false,
        isClicked: false
      })
      await this.citizenNotifRepository.save(notif)
    }

    const save = this.documentRepository.create({
       case: data.caseId,
       documentType: data.documentType,
       control_number: data.control_number,
       fromOffice: data.from_office,
       office: data.office,
       sender: data.sender,
       reciever: data.reciever,
       remarks: data.remarks,
       address: data.address,
       status: null,
    });

    return await this.documentRepository.save(save)
  }

  async findAllSendedDocs(id: number) {
    return await this.documentRepository.createQueryBuilder('document')
    .select([
       'document',
       'case',
       'document_type',
       'office'
    ])
    .leftJoin('document.case', 'case')
    .leftJoin('document.documentType', 'document_type')
    .leftJoin('document.office', 'office')
    .leftJoinAndMapOne( 'document.fromOffice', Office, 'fromOffice', 'document.fromOffice = fromOffice.id' )
    .where('document.fromOffice =:id', { id })
    .orderBy('document.updated_at', 'DESC')
    .getMany();
  }

  async findAllReceivedDocs(id: number) {
    return await this.documentRepository.createQueryBuilder('document')
    .select([
       'document',
       'case',
       'document_type',
       'office'
    ])
    .leftJoin('document.case', 'case')
    .leftJoin('document.documentType', 'document_type')
    .leftJoin('document.fromOffice', 'office')
    .where('document.office =:id', { id })
    .andWhere('document.status IS NOT NULL')
    .orderBy('document.updated_at', 'DESC')
    .getMany();
  }

  async findOneByCaseId(id: number) {
    return await this.documentRepository.createQueryBuilder('document')
    .select([
       'document',
       'case',
       'document_type',
       'office'
    ])
    .leftJoin('document.case', 'case')
    .leftJoin('document.documentType', 'document_type')
    .leftJoin('document.office', 'office')
    .where('document.case =:id', { id })
    .getMany(); ;
  }

  async update(data: any) {
    return await this.documentRepository.update( data.documentId, {
        case: data.caseId,
        documentType: data.documentType,
        control_number: data.control_number,
        fromOffice: data.from_office,
        office: data.office,
        sender: data.sender,
        reciever: data.reciever,
        remarks: data.remarks,
        address: data.address,
        status: null,
    });
  }

  async sendDocument( data: any){
    const users = await this.userRepository.createQueryBuilder('user')
    .select([
      'user',
      'user_details',
      'office'
     ])
     .leftJoin('user.userDetails', 'user_details')
     .leftJoin('user_details.office', 'office')
     .where('user_details.office = :id ', { id: data.office.id })
     .getMany();

     for (let i = 0; i < users.length; i++) {
        let sendEmail = {
          email: users[i].email,
          recieving_office: data.office.description,
          sending_office: data.fromOffice.description,
          document_type: data.documentType.description,
          control_no: data.control_number,
          case_no: data.case.case_no,
          case_title: data.case.case_title,
          sender: data.sender,
          reciever: data.reciever,
          address: data.address,
        }
        await this.mailService.sendUserDocuments(sendEmail)
     }

    const date = new Date()
    const saveNotif = this.notifRepository.create({
      notif_type: 1,
      document: data.id,
      is_clicked: false,
      notif_for: data.office.id
    })
    await this.notifRepository.save(saveNotif)
    return await this.documentRepository.update(data.id, { status: 0, sended_date: date.getFullYear()+'-'+ (date.getMonth()+1) +'-'+ date.getDate()})
  }

  async acknowledgeDocument( data: any){
    const date = new Date()
    const saveNotif = this.notifRepository.create({
      notif_type: 2,
      document: data.id,
      is_clicked: false,
      notif_for: data.fromOffice.id
    })
    await this.notifRepository.save(saveNotif)
    return await this.documentRepository.update(data.id, { status: 1, acknowledge_date: date.getFullYear()+'-'+ (date.getMonth()+1) +'-'+ date.getDate()})
  }

  remove(id: number) {
    return `This action removes a #${id} document`;
  }
}
