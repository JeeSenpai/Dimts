import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CaseDecision } from '../case-decision/entities/case-decision.entity';
import { CourtHearing } from '../court-hearings/entities/court-hearing.entity';
import { HearingType } from '../hearing-types/entities/hearing-type.entity';
import { Judge } from '../judges/entities/judge.entity';
import { Proceeding } from '../proceedings/entities/proceeding.entity';
import { RaffledCourt } from '../raffled-court/entities/raffled-court.entity';
import { Repository } from 'typeorm';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';
import { Case } from './entities/case.entity';
import { HTTPResponse } from 'puppeteer';

@Injectable()
export class CasesService {
  constructor(@InjectRepository(Case) private readonly caseRepository: Repository<Case>, 
              @InjectRepository(CourtHearing) private readonly courtHearingRepository: Repository<CourtHearing>){}

  async create(data: any) {
    const save = this.caseRepository.create({
        case_no: data.case_no,
        case_title: data.case_title,
        case_description: data.case_description,
        date_recieved: data.date_recieved,
        case_tag: data.case_tag,
        case_checklist: data.case_checklist,
        caseType: data.case_type,
        point_x: data.point_x,
        point_y: data.point_y,
        level: data.level,
        caseStatus: true
    })
    return await this.caseRepository.save(save)
  }

  async findAll() {
    return await this.caseRepository.createQueryBuilder('case')
    .select([
        'case',
        'case_type',
    ])
    .leftJoin('case.caseType', 'case_type')
    .leftJoinAndMapMany('case.courtHearings', CourtHearing, 'court_hearing', 'case.id = court_hearing.case' )
    .leftJoinAndMapOne('court_hearing.hearingType', HearingType , 'hearing_type', 'court_hearing.hearingType = hearing_type.id' )
    .where('case.caseStatus = true')
    .orderBy('case.updated_at', 'DESC')
    .getMany();
  }

  async findAllDocket() {
    return await this.caseRepository.createQueryBuilder('case')
    .select([
        'case',
        'case_type',
    ])
    .leftJoin('case.caseType', 'case_type')
    .leftJoinAndMapMany('case.courtHearings', CourtHearing, 'court_hearing', 'case.id = court_hearing.case' )
    .leftJoinAndMapOne('court_hearing.hearingType', HearingType , 'hearing_type', 'court_hearing.hearingType = hearing_type.id' )
    .leftJoinAndMapMany('case.proceedings', Proceeding, 'proceedings', 'case.id = proceedings.case' )
    .leftJoinAndMapOne('proceedings.caseDecision', CaseDecision, 'case_decision', 'proceedings.caseDecision = case_decision.id')
    .where('case.caseStatus = false')
    .orderBy('case.updated_at', 'DESC')
    .getMany();
  }

  async findOne(id: number) {
    return await this.caseRepository.createQueryBuilder('case')
    .select([
        'case',
        'case_type',
    ])
    .leftJoin('case.caseType', 'case_type')
    .leftJoinAndMapMany('case.courtHearings', CourtHearing, 'court_hearing', 'case.id = court_hearing.case' )
    .leftJoinAndMapOne('court_hearing.hearingType', HearingType , 'hearing_type', 'court_hearing.hearingType = hearing_type.id' )
    .where('case.id =:id', {id})
    .getOne();
  }

  async findOneCaseWithProceedings( id: number){
    return await this.caseRepository.createQueryBuilder('case')
    .select([
        'case',
        'case_type',
    ])
    .leftJoin('case.caseType', 'case_type')
    .leftJoinAndMapMany('case.courtHearings', CourtHearing, 'court_hearing', 'case.id = court_hearing.case' )
    .leftJoinAndMapOne('court_hearing.hearingType', HearingType , 'hearing_type', 'court_hearing.hearingType = hearing_type.id' )
    .leftJoinAndMapOne('court_hearing.raffledCourt', RaffledCourt , 'raffled_court', 'court_hearing.raffledCourt = raffled_court.id' )
    .leftJoinAndMapOne('court_hearing.judgeAssigned', Judge , 'judge_assigned', 'court_hearing.judgeAssigned = judge_assigned.id' )
    .where('case.id =:caseId', { caseId: id })
    .orderBy('court_hearing.id', 'DESC')
    .getOne();
  }

  async findCaseWithProceedings(){
      let caseArr = []
      const cases = await this.caseRepository.createQueryBuilder('case')
        .select([
          'case',
          'case_type',
      ])
      .leftJoin('case.caseType', 'case_type')
      .orderBy('case.updated_at', 'DESC')
      .getMany()

      for (let i = 0; i < cases.length; i++) {
          const courtHearing = await this.courtHearingRepository.createQueryBuilder('court_hearing')
          .select([
             'court_hearing',
             'case',
          ])
          .leftJoin('court_hearing.case', 'case')
          .where('court_hearing.case =:id', { id: cases[i].id })
          .getOne()

          if(courtHearing){
              caseArr.push(cases[i])
          }
      }
      return caseArr
  }

  async update(data: any) {
    return await this.caseRepository.update(data.case_id, {
      case_no: data.case_no,
      case_title: data.case_title,
      case_description: data.case_description,
      date_recieved: data.date_recieved,
      case_tag: data.case_tag,
      case_checklist: data.case_checklist,
      caseType: data.case_type,
      point_x: data.point_x,
      point_y: data.point_y,
      level: data.level
    })
  }

  async updateCaseStatusToTrue( data:any ){
    return await this.caseRepository.update(data.caseId, {
       caseStatus: true,
       reopenCount: data.reopenCount + 1
    })
  }

  async updateCaseStatusToFalse( data:any ){
     return await this.caseRepository.update(data.caseId, {
        caseStatus: false
     })
  }

  remove(id: number) {
    return `This action removes a #${id} case`;
  }


  // For clustering
  async findAllActiveCasesClusters() {
    return await this.caseRepository.createQueryBuilder('case')
    .select([
        'case',
        'case_type',
    ])
    .leftJoin('case.caseType', 'case_type')
    .where('case.caseType = 1')
    .andWhere('case.caseStatus = true')
    .getMany();
  }

  async findAllDocketCasesClusters() {
    return await this.caseRepository.createQueryBuilder('case')
    .select([
        'case',
        'case_type',
    ])
    .leftJoin('case.caseType', 'case_type')
    .where('case.caseType = 1')
    .andWhere('case.caseStatus = false')
    .getMany();
  }

  async countCasesByCaseType(id: number){
     return await this.caseRepository.createQueryBuilder('case')
     .select([
        'COUNT(case.id) as caseCount'
     ])
     .where('case.caseType =:id', { id })
     .andWhere('case.caseStatus = true')
     .getRawMany()
  }

   countCases(id: number) {
    return this.caseRepository.createQueryBuilder('case')
     .select([
        'COUNT(case.id) as caseCount'
     ])
     .where('case.id > :id', {id})
     .getRawMany()
 }

   countDocketCase(id: number){
     return  this.caseRepository.createQueryBuilder('case')
     .select([
      'COUNT(case.id) as caseCount'
   ])
   .where('case.caseStatus =:id', { id })
   .getRawMany()
  }

  async deleteAllCases(){

    try{
      const del = await this.caseRepository.find()

      for (let i = 0; i < del.length; i++) {
           await this.caseRepository.delete(del[i])
      }

      return 'Success'
    }
    catch(err){
       return err
    }
    
  }

}
