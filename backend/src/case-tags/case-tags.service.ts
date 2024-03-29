import { Injectable } from '@nestjs/common';
import { CreateCaseTagDto } from './dto/create-case-tag.dto';
import { UpdateCaseTagDto } from './dto/update-case-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CaseTag } from './entities/case-tag.entity';

@Injectable()
export class CaseTagsService {
  constructor(@InjectRepository(CaseTag) private readonly caseTagRepository: Repository<CaseTag>){}
  
  async create(data:any) {
    const toSave = this.caseTagRepository.create({
         description: data.description,
         caseType: data.caseType,
         status: data.status
    })

    return await this.caseTagRepository.save(toSave)
 }

  async findAllTagsByCaseType(id: number) {
    return await this.caseTagRepository.createQueryBuilder('case_tag')
    .select([
       'case_tag',
       'case_type'
    ])
    .leftJoin('case_tag.caseType', 'case_type')
    .where('case_tag.caseType =:id', { id })
    .andWhere('case_tag.status = true')
    .orderBy('case_tag.description', 'ASC')
    .getMany();
  }

  async findAll(){
    return await this.caseTagRepository.createQueryBuilder('case_tag')
    .select([
       'case_tag',
       'case_type'
    ])
    .leftJoin('case_tag.caseType', 'case_type')
    .orderBy('case_tag.description', 'ASC')
    .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} caseTag`;
  }

  async update(data: any) {
    return await this.caseTagRepository.update( data.tagId ,{ 
        description: data.description,
        caseType: data.caseType,
        status: data.status
    })
  }

  remove(id: number) {
    return `This action removes a #${id} caseTag`;
  }
}
