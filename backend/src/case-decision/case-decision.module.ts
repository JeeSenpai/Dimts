import { Module } from '@nestjs/common';
import { CaseDecisionService } from './case-decision.service';
import { CaseDecisionController } from './case-decision.controller';

@Module({
  controllers: [CaseDecisionController],
  providers: [CaseDecisionService]
})
export class CaseDecisionModule {}
