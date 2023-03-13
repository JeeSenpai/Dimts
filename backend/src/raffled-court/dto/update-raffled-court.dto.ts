import { PartialType } from '@nestjs/swagger';
import { CreateRaffledCourtDto } from './create-raffled-court.dto';

export class UpdateRaffledCourtDto extends PartialType(CreateRaffledCourtDto) {}
