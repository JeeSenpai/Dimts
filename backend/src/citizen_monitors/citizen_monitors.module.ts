import { Module } from '@nestjs/common';
import { CitizenMonitorsService } from './citizen_monitors.service';
import { CitizenMonitorsController } from './citizen_monitors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitizenMonitor } from './entities/citizen_monitor.entity';
import { Case } from '../cases/entities/case.entity';
import { Notification } from '../notifications/entities/notification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CitizenMonitor,Case, Notification])],
  controllers: [CitizenMonitorsController],
  providers: [CitizenMonitorsService]
})
export class CitizenMonitorsModule {}
