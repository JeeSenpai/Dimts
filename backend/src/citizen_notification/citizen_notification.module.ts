import { Module } from '@nestjs/common';
import { CitizenNotificationService } from './citizen_notification.service';
import { CitizenNotificationController } from './citizen_notification.controller';
import { CitizenNotification } from './entities/citizen_notification.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CitizenNotification])],
  controllers: [CitizenNotificationController],
  providers: [CitizenNotificationService]
})
export class CitizenNotificationModule {}
