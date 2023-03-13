import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJudgeDto } from './dto/create-judge.dto';
import { UpdateJudgeDto } from './dto/update-judge.dto';
import { Judge } from './entities/judge.entity';

@Injectable()
export class JudgesService {
  constructor(@InjectRepository(Judge) private readonly judgeRepository: Repository<Judge>){}
  
  create(createJudgeDto: CreateJudgeDto) {
    return 'This action adds a new judge';
  }

  findAll() {
    return this.judgeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} judge`;
  }

  update(id: number, updateJudgeDto: UpdateJudgeDto) {
    return `This action updates a #${id} judge`;
  }

  remove(id: number) {
    return `This action removes a #${id} judge`;
  }
}
