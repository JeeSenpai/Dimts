import { PartialType } from '@nestjs/swagger';
import { CreateCaseChecklistDto } from './create-case-checklist.dto';

export class UpdateCaseChecklistDto extends PartialType(CreateCaseChecklistDto) {}
