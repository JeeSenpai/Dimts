import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Document } from './entities/document.entity';
import { Notification } from 'src/notifications/entities/notification.entity';

@Injectable()
export class DocumentsService {
  constructor(@InjectRepository(Document) private readonly documentRepository: Repository<Document>,
              @InjectRepository(Notification) private readonly notifRepository: Repository<Notification>){}


  async create(data: any) {
    const save = this.documentRepository.create({
       case: data.caseId,
       documentType: data.documentType,
       control_number: data.control_number,
       fromOffice: data.from_office,
       office: data.office,
       sender: data.sender,
       reciever: data.reciever,
       remarks: data.remarks,
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
        status: null,
    });
  }

  async sendDocument( data: any){
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
