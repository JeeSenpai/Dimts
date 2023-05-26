import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCitizenMonitorDto } from './dto/create-citizen_monitor.dto';
import { UpdateCitizenMonitorDto } from './dto/update-citizen_monitor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CitizenMonitor } from './entities/citizen_monitor.entity';
import { Repository } from 'typeorm';
import { Case } from '../cases/entities/case.entity';

@Injectable()
export class CitizenMonitorsService {
  constructor(@InjectRepository(CitizenMonitor) private readonly citizenMonitorRepository: Repository<CitizenMonitor>,
              @InjectRepository(Case) private readonly caseRepository: Repository<Case>){}

  async create(citizenId: number, case_no: string, relationship: string) {
     const cases = await this.caseRepository.createQueryBuilder('case')
     .where('case.case_no =:case_no', { case_no })
     .getOne()

     if(cases){
        const save = this.citizenMonitorRepository.create({
          citizen: citizenId,
          case: cases.id,
          relationship: relationship,
          is_verified: false
        })

        return await this.citizenMonitorRepository.save(save)
     }
     else{
        return new HttpException('Case Not Found', HttpStatus.BAD_REQUEST)
     }
  }


  async findAllMonitorByCitizen(citizenId: number){
     return await this.citizenMonitorRepository.createQueryBuilder('citizen_monitor')
     .select([
        'citizen_monitor',
        'case'
     ])
     .leftJoin('citizen_monitor.case', 'case')
     .where('citizen_monitor.citizen =:citizenId', { citizenId })
     .orderBy('citizen_monitor.created_at', 'DESC')
     .getMany()
  }


  async verifyCitizen(citizenId: number){
     return await this.citizenMonitorRepository.update(citizenId, { is_verified: true })
  }
  async unverifyCitizen(citizenId: number){
    return await this.citizenMonitorRepository.update(citizenId, { is_verified: false })
  }

  async remove(id: number) {
    return await this.citizenMonitorRepository.delete({ id: id });
  }
}
