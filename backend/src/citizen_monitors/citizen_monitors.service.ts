import { Injectable } from '@nestjs/common';
import { CreateCitizenMonitorDto } from './dto/create-citizen_monitor.dto';
import { UpdateCitizenMonitorDto } from './dto/update-citizen_monitor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CitizenMonitor } from './entities/citizen_monitor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitizenMonitorsService {
  constructor(@InjectRepository(CitizenMonitor) private readonly citizenMonitorRepository: Repository<CitizenMonitor>){}

  create(createCitizenMonitorDto: CreateCitizenMonitorDto) {
    return 'This action adds a new citizenMonitor';
  }

  findAll() {
    return `This action returns all citizenMonitors`;
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

  findOne(id: number) {
    return `This action returns a #${id} citizenMonitor`;
  }

  update(id: number, updateCitizenMonitorDto: UpdateCitizenMonitorDto) {
    return `This action updates a #${id} citizenMonitor`;
  }

  async verifyCitizen(citizenId: number){
     return await this.citizenMonitorRepository.update(citizenId, { is_verified: true })
  }
  async unverifyCitizen(citizenId: number){
    return await this.citizenMonitorRepository.update(citizenId, { is_verified: false })
  }

  remove(id: number) {
    return `This action removes a #${id} citizenMonitor`;
  }
}
