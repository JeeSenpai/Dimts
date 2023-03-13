import { Module } from '@nestjs/common';
import { HearingTypesService } from './hearing-types.service';
import { HearingTypesController } from './hearing-types.controller';
import { HearingType } from './entities/hearing-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HearingType])],
  controllers: [HearingTypesController],
  providers: [HearingTypesService]
})
export class HearingTypesModule {}
