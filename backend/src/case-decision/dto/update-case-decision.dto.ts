import { PartialType } from '@nestjs/swagger';
import { CreateCaseDecisionDto } from './create-case-decision.dto';

export class UpdateCaseDecisionDto extends PartialType(CreateCaseDecisionDto) {}
