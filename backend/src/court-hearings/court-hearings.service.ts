import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourtHearingDto } from './dto/create-court-hearing.dto';
import { UpdateCourtHearingDto } from './dto/update-court-hearing.dto';
import { CourtHearing } from './entities/court-hearing.entity';
import { CitizenMonitor } from '../citizen_monitors/entities/citizen_monitor.entity';
import { MailService } from '../mail/mail.service';
import * as moment from 'moment';
@Injectable()
export class CourtHearingsService {
  constructor(@InjectRepository(CourtHearing) private readonly courtHearingRepository: Repository<CourtHearing>,
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
    .where('citizen_monitor.case =:id', { id: data.case_id })
    .andWhere('citizen_monitor.is_verified = true')
    .getMany()


    for (let i = 0; i < monitor.length; i++) {
        let formData = {
            email: monitor[i].citizen.email,
            citizen_name: monitor[i].citizen.fname + " " + monitor[i].citizen.lname,
            hearing_schedule: moment(data.hearing_schedule).format('MMMM DD, YYYY'),
            hearing_type: data.hearing_type.description,
            case_no: monitor[i].case.case_no,
            case_title: monitor[i].case.case_title,
            raffled_court: data.raffled_court.description,
            judge_assigned: data.judge.name,
            start_time: moment(data.start_time, 'HH:mm:ss').format('hh:mm A'),
            end_time: moment(data.end_time, 'HH:mm:ss').format('hh:mm A') 
        }
      await this.mailService.sendCourtHearing(formData)
    }
    
    const save = this.courtHearingRepository.create({
        case: data.case_id,
        hearingType: data.hearing_type.id,
        hearing_schedule: data.hearing_schedule,
        start_time: data.start_time,
        end_time: data.end_time,
        judgeAssigned: data.judge.id,
        raffledCourt: data.raffled_court.id,
        status: data.status,
        remarks: data.remarks
    })
    return await this.courtHearingRepository.save(save)
  }

  async findAll() {
    return await this.courtHearingRepository.createQueryBuilder('court_hearing')
    .select([
        'court_hearing',
        'case',
        'case_type',
        'hearing_type',
        'raffled_court',
        'judge'
    ])
    .leftJoin('court_hearing.case', 'case')
    .leftJoin('case.caseType', 'case_type')
    .leftJoin('court_hearing.raffledCourt', 'raffled_court')
    .leftJoin('court_hearing.judgeAssigned', 'judge')
    .leftJoin('court_hearing.hearingType', 'hearing_type')
    .orderBy('court_hearing.updated_at', 'DESC')
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
        status: data.status,
        remarks: data.remarks
    })
  }

  remove(id: number) {
    return `This action removes a #${id} courtHearing`;
  }
}
