import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJudgeDto } from './dto/create-judge.dto';
import { UpdateJudgeDto } from './dto/update-judge.dto';
import { Judge } from './entities/judge.entity';

@Injectable()
export class JudgesService {
  constructor(@InjectRepository(Judge) private readonly judgeRepository: Repository<Judge>){}
  
  async create(data:any) {
    const toSave = this.judgeRepository.create({
         name: data.name,
         status: data.status
    })

    return await this.judgeRepository.save(toSave)
 }

  findAll() {
    return this.judgeRepository.find();
  }

  async findAllActive() {
    return this.judgeRepository.createQueryBuilder('judge')
    .where('judge.status = true')
    .getMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} judge`;
  }

  async update(data: any) {
    return await this.judgeRepository.update( data.judgeId ,{ 
        name: data.name,
        status: data.status
    })
  }

  remove(id: number) {
    return `This action removes a #${id} judge`;
  }
}
