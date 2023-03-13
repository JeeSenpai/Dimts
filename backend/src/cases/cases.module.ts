import { Module } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CasesController } from './cases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Case } from './entities/case.entity';
import { CourtHearing } from 'src/court-hearings/entities/court-hearing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Case, CourtHearing])],
  controllers: [CasesController],
  providers: [CasesService]
})
export class CasesModule {}
