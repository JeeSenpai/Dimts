import { Module } from '@nestjs/common';
import { ProceedingsService } from './proceedings.service';
import { ProceedingsController } from './proceedings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proceeding } from './entities/proceeding.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proceeding])],
  controllers: [ProceedingsController],
  providers: [ProceedingsService]
})
export class ProceedingsModule {}
