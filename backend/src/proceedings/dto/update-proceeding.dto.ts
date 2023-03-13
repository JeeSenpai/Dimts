import { PartialType } from '@nestjs/swagger';
import { CreateProceedingDto } from './create-proceeding.dto';

export class UpdateProceedingDto extends PartialType(CreateProceedingDto) {}
