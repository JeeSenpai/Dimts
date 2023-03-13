import { Module } from '@nestjs/common';
import { CourtHearingsService } from './court-hearings.service';
import { CourtHearingsController } from './court-hearings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourtHearing } from './entities/court-hearing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourtHearing])],
  controllers: [CourtHearingsController],
  providers: [CourtHearingsService]
})
export class CourtHearingsModule {}
