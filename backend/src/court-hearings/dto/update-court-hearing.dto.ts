import { PartialType } from '@nestjs/swagger';
import { CreateCourtHearingDto } from './create-court-hearing.dto';

export class UpdateCourtHearingDto extends PartialType(CreateCourtHearingDto) {}
