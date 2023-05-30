import { Module } from '@nestjs/common';
import { CourtHearingsService } from './court-hearings.service';
import { CourtHearingsController } from './court-hearings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourtHearing } from './entities/court-hearing.entity';
import { CitizenMonitor } from '../citizen_monitors/entities/citizen_monitor.entity';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [MailModule, TypeOrmModule.forFeature([CourtHearing, CitizenMonitor])],
  controllers: [CourtHearingsController],
  providers: [CourtHearingsService]
})
export class CourtHearingsModule {}
