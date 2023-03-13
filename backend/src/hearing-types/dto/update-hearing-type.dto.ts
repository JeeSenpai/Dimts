import { PartialType } from '@nestjs/swagger';
import { CreateHearingTypeDto } from './create-hearing-type.dto';

export class UpdateHearingTypeDto extends PartialType(CreateHearingTypeDto) {}
