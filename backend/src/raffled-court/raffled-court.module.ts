import { Module } from '@nestjs/common';
import { RaffledCourtService } from './raffled-court.service';
import { RaffledCourtController } from './raffled-court.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RaffledCourt } from './entities/raffled-court.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RaffledCourt])],
  controllers: [RaffledCourtController],
  providers: [RaffledCourtService]
})
export class RaffledCourtModule {}
