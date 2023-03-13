import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourtHearingDto } from './dto/create-court-hearing.dto';
import { UpdateCourtHearingDto } from './dto/update-court-hearing.dto';
import { CourtHearing } from './entities/court-hearing.entity';

@Injectable()
export class CourtHearingsService {
  constructor(@InjectRepository(CourtHearing) private readonly courtHearingRepository: Repository<CourtHearing>){}
  
  async create(data: any) {
    const save = this.courtHearingRepository.create({
        case: data.case_id,
        hearingType: data.hearing_type,
        hearing_schedule: data.hearing_schedule,
        start_time: data.start_time,
        end_time: data.end_time,
        judgeAssigned: data.judge,
        raffledCourt: data.raffled_court,
        remarks: data.remarks
    })
    return await this.courtHearingRepository.save(save)
  }

  async findAll() {
    return await this.courtHearingRepository.createQueryBuilder('court_hearing')
    .select([
        'court_hearing',
        'case',
        'hearing_type',
        'raffled_court',
        'judge'
    ])
    .leftJoin('court_hearing.case', 'case')
    .leftJoin('court_hearing.raffledCourt', 'raffled_court')
    .leftJoin('court_hearing.judgeAssigned', 'judge')
    .leftJoin('court_hearing.hearingType', 'hearing_type')
    .orderBy('court_hearing.id', 'DESC')
    .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} courtHearing`;
  }

  async update(data: any) {
    return await this.courtHearingRepository.update(data.court_hearing_id, {
        case: data.case_id,
        hearingType: data.hearing_type,
        hearing_schedule: data.hearing_schedule,
        start_time: data.start_time,
        end_time: data.end_time,
        judgeAssigned: data.judge,
        raffledCourt: data.raffled_court,
        remarks: data.remarks
    })
  }

  remove(id: number) {
    return `This action removes a #${id} courtHearing`;
  }
}
