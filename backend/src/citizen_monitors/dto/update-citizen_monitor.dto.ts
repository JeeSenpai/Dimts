import { PartialType } from '@nestjs/swagger';
import { CreateCitizenMonitorDto } from './create-citizen_monitor.dto';

export class UpdateCitizenMonitorDto extends PartialType(CreateCitizenMonitorDto) {}
