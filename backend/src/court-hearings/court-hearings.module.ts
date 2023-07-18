import { Module } from '@nestjs/common';
import { CourtHearingsService } from './court-hearings.service';
import { CourtHearingsController } from './court-hearings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourtHearing } from './entities/court-hearing.entity';
import { CitizenMonitor } from '../citizen_monitors/entities/citizen_monitor.entity';
import { MailModule } from '../mail/mail.module';
import { CitizenNotification } from '../citizen_notification/entities/citizen_notification.entity';

@Module({
  imports: [MailModule, TypeOrmModule.forFeature([CourtHearing, CitizenMonitor, CitizenNotification])],
  controllers: [CourtHearingsController],
  providers: [CourtHearingsService]
})
export class CourtHearingsModule {}
