import { PartialType } from '@nestjs/swagger';
import { CreateCaseTagDto } from './create-case-tag.dto';

export class UpdateCaseTagDto extends PartialType(CreateCaseTagDto) {}
