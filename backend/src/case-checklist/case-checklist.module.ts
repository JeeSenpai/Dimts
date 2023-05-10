import { Module } from '@nestjs/common';
import { CaseChecklistService } from './case-checklist.service';
import { CaseChecklistController } from './case-checklist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaseChecklist } from './entities/case-checklist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CaseChecklist])],
  controllers: [CaseChecklistController],
  providers: [CaseChecklistService]
})
export class CaseChecklistModule {}
