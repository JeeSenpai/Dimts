import { Module } from '@nestjs/common';
import { CaseDecisionService } from './case-decision.service';
import { CaseDecisionController } from './case-decision.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaseDecision } from './entities/case-decision.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CaseDecision])],
  controllers: [CaseDecisionController],
  providers: [CaseDecisionService]
})
export class CaseDecisionModule {}
