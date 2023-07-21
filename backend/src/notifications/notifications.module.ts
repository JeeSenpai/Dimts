import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Document } from '../documents/entities/document.entity';
import { Notification } from './entities/notification.entity';
import { CitizenMonitor } from '../citizen_monitors/entities/citizen_monitor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Document, Notification, CitizenMonitor])],
  controllers: [NotificationsController],
  providers: [NotificationsService]
})
export class NotificationsModule {}
