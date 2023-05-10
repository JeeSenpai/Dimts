import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
import { DocumentType } from './entities/document-type.entity';

@Injectable()
export class DocumentTypeService {
  constructor(@InjectRepository(DocumentType) private readonly documentTypeRepository: Repository<DocumentType>){}
  
  async create(data:any) {
    const toSave = this.documentTypeRepository.create({
         description: data.description,
         status: data.status
    })

    return await this.documentTypeRepository.save(toSave)
 }

  findAll() {
    return this.documentTypeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} documentType`;
  }

  async update(data: any) {
    return await this.documentTypeRepository.update( data.documentTypeId ,{ 
        description: data.description,
        status: data.status
    })
  }

  remove(id: number) {
    return `This action removes a #${id} documentType`;
  }
}
