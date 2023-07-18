import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Document } from './entities/document.entity';
import { Notification } from '../notifications/entities/notification.entity';
import { User } from '../users/entities/user.entity';
import { MailModule } from '../mail/mail.module';
import { CitizenNotification } from '../citizen_notification/entities/citizen_notification.entity';
import { CitizenMonitor } from '../citizen_monitors/entities/citizen_monitor.entity';

@Module({
  imports: [MailModule, TypeOrmModule.forFeature([Document, Notification, User,CitizenNotification, CitizenMonitor])],
  controllers: [DocumentsController],
  providers: [DocumentsService]
})
export class DocumentsModule {}
