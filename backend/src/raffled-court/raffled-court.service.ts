import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRaffledCourtDto } from './dto/create-raffled-court.dto';
import { UpdateRaffledCourtDto } from './dto/update-raffled-court.dto';
import { RaffledCourt } from './entities/raffled-court.entity';

@Injectable()
export class RaffledCourtService {
  constructor(@InjectRepository(RaffledCourt) private readonly raffledCourtRepository: Repository<RaffledCourt>){}
  
  async create(data:any) {
    const toSave = this.raffledCourtRepository.create({
         description: data.description,
         status: data.status
    })

    return await this.raffledCourtRepository.save(toSave)
 }

  findAll() {
    return this.raffledCourtRepository.find()
  }

  async findAllActive() {
    return this.raffledCourtRepository.createQueryBuilder('raffled_court')
    .where('raffled_court.status = true')
    .getMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} raffledCourt`;
  }

  async update(data: any) {
    return await this.raffledCourtRepository.update( data.raffledCourtId ,{ 
        description: data.description,
        status: data.status
    })
  }

  remove(id: number) {
    return `This action removes a #${id} raffledCourt`;
  }
}
