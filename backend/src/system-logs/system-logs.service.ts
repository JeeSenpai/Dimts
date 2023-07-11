import { Injectable } from '@nestjs/common';
import { CreateSystemLogDto } from './dto/create-system-log.dto';
import { UpdateSystemLogDto } from './dto/update-system-log.dto';
import { SystemLog } from './entities/system-log.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SystemLogsService {
  constructor(@InjectRepository(SystemLog) private readonly systemLogRepository: Repository<SystemLog>){}

  async create(data: any) {
    const saved = this.systemLogRepository.create({
        user: data.user
    })

    return await this.systemLogRepository.save(saved)
  }

  findAll() {
    return this.systemLogRepository.createQueryBuilder('system_log')
    .select([
      'system_log',
      'user',
      'user_details',
      'user_type',
      'office'
     ])
     .leftJoin('system_log.user', 'user')
     .leftJoin('user.userDetails', 'user_details')
     .leftJoin('user_details.userType', 'user_type')
     .leftJoin('user_details.office', 'office')
     .getMany();
  }

  findLoginDate(date: string) {
    return this.systemLogRepository.createQueryBuilder('system_log')
    .select([
      'system_log',
      'user',
      'user_details',
      'user_type',
      'office'
     ])
     .leftJoin('system_log.user', 'user')
     .leftJoin('user.userDetails', 'user_details')
     .leftJoin('user_details.userType', 'user_type')
     .leftJoin('user_details.office', 'office')
     .where('system_log.date_login LIKE :date', { date: `%${date}%`})
     .getMany();
  }

  update(id: number, updateSystemLogDto: UpdateSystemLogDto) {
    return `This action updates a #${id} systemLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} systemLog`;
  }
}
