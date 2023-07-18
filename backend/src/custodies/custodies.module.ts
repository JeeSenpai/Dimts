import { Module } from '@nestjs/common';
import { CustodiesService } from './custodies.service';
import { CustodiesController } from './custodies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Custody } from './entities/custody.entity';
import { CitizenNotification } from '../citizen_notification/entities/citizen_notification.entity';
import { CitizenMonitor } from '../citizen_monitors/entities/citizen_monitor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Custody, CitizenNotification, CitizenMonitor])],
  controllers: [CustodiesController],
  providers: [CustodiesService]
})
export class CustodiesModule {}
