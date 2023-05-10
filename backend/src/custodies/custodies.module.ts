import { Module } from '@nestjs/common';
import { CustodiesService } from './custodies.service';
import { CustodiesController } from './custodies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Custody } from './entities/custody.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Custody])],
  controllers: [CustodiesController],
  providers: [CustodiesService]
})
export class CustodiesModule {}
