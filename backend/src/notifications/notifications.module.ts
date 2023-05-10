import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Document } from 'src/documents/entities/document.entity';
import { Notification } from './entities/notification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Document, Notification])],
  controllers: [NotificationsController],
  providers: [NotificationsService]
})
export class NotificationsModule {}
