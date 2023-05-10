import { PartialType } from '@nestjs/swagger';
import { CreateCustodyDto } from './create-custody.dto';

export class UpdateCustodyDto extends PartialType(CreateCustodyDto) {}
