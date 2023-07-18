import { Injectable } from '@nestjs/common';
import { CreateCustodyDto } from './dto/create-custody.dto';
import { UpdateCustodyDto } from './dto/update-custody.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Custody } from './entities/custody.entity';
import { CitizenNotification } from '../citizen_notification/entities/citizen_notification.entity';
import { CitizenMonitor } from '../citizen_monitors/entities/citizen_monitor.entity';

@Injectable()
export class CustodiesService {
  constructor(@InjectRepository(Custody) private readonly custodyRepository: Repository<Custody>,
              @InjectRepository(CitizenNotification) private readonly citizenNotifRepository: Repository<CitizenNotification>,
              @InjectRepository(CitizenMonitor) private readonly citizenMonitorRepository: Repository<CitizenMonitor>,
              ){}
  
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
        description: 'There is a new custodies on your verified monitored case',
        isViewed: false,
        isClicked: false
      })
      await this.citizenNotifRepository.save(notif)
    }

     const save = this.custodyRepository.create({
         case: data.caseId,
         fname: data.fname,
         mname: data.mname,
         lname: data.lname,
         suffix: data.suffix,
         height: data.height,
         weight: data.weight,
         blood_type: data.blood_type,
         birth_date: data.birthdate,
         address: data.address,
         pnp_status: data.pnp_status,
         pnp_status_date: data.pnp_status_date,
         bjmp_status: data.bjmp_status,
         bjmp_status_date: data.bjmp_status_date,
         bucor_status: data.bucor_status,
         bucor_status_date: data.bucor_status_date
     })

     return await this.custodyRepository.save(save)
  }

  async findAll() {
    return await this.custodyRepository.createQueryBuilder('custody')
    .select([
       'custody',
       'case',
       'case_type'
    ])
    .leftJoin('custody.case', 'case')
    .leftJoin('case.caseType', 'case_type')
    .orderBy('custody.updated_at', 'DESC')
    .getMany();
  }

  async findAllCustodyById(id:any){
    return await this.custodyRepository.createQueryBuilder('custody')
    .select([
       'custody',
       'case',
       'case_type'
    ])
    .leftJoin('custody.case', 'case')
    .leftJoin('case.caseType', 'case_type')
    .where('case.id =:id', { id })
    .orderBy('custody.id', 'DESC')
    .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} custody`;
  }

  async update(data:any) {
    return await this.custodyRepository.update(data.custodyId, {
      case: data.caseId,
      fname: data.fname,
      mname: data.mname,
      lname: data.lname,
      suffix: data.suffix,
      height: data.height,
      weight: data.weight,
      blood_type: data.blood_type,
      birth_date: data.birthdate,
      address: data.address,
      pnp_status: data.pnp_status,
      pnp_status_date: data.pnp_status_date,
      bjmp_status: data.bjmp_status,
      bjmp_status_date: data.bjmp_status_date,
      bucor_status: data.bucor_status,
      bucor_status_date: data.bucor_status_date
    });
  }

  remove(id: number) {
    return `This action removes a #${id} custody`;
  }
}
