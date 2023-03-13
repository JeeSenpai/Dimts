import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRaffledCourtDto } from './dto/create-raffled-court.dto';
import { UpdateRaffledCourtDto } from './dto/update-raffled-court.dto';
import { RaffledCourt } from './entities/raffled-court.entity';

@Injectable()
export class RaffledCourtService {
  constructor(@InjectRepository(RaffledCourt) private readonly raffledCourtRepository: Repository<RaffledCourt>){}
  
  create(createRaffledCourtDto: CreateRaffledCourtDto) {
    return 'This action adds a new raffledCourt';
  }

  findAll() {
    return this.raffledCourtRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} raffledCourt`;
  }

  update(id: number, updateRaffledCourtDto: UpdateRaffledCourtDto) {
    return `This action updates a #${id} raffledCourt`;
  }

  remove(id: number) {
    return `This action removes a #${id} raffledCourt`;
  }
}
