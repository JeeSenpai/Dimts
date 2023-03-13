import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourtHearing } from 'src/court-hearings/entities/court-hearing.entity';
import { HearingType } from 'src/hearing-types/entities/hearing-type.entity';
import { Judge } from 'src/judges/entities/judge.entity';
import { RaffledCourt } from 'src/raffled-court/entities/raffled-court.entity';
import { Repository } from 'typeorm';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';
import { Case } from './entities/case.entity';

@Injectable()
export class CasesService {
  constructor(@InjectRepository(Case) private readonly caseRepository: Repository<Case>, 
              @InjectRepository(CourtHearing) private readonly courtHearingRepository: Repository<CourtHearing>
  ){}

  async create(data: any) {
    const save = this.caseRepository.create({
        case_no: data.case_no,
        case_title: data.case_title,
        case_description: data.case_description,
        date_recieved: data.date_recieved,
        caseType: data.case_type,
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
    .orderBy('case.id', 'DESC')
    .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} case`;
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
      .orderBy('case.id', 'DESC')
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
      caseType: data.case_type,
    })
  }

  remove(id: number) {
    return `This action removes a #${id} case`;
  }
}
