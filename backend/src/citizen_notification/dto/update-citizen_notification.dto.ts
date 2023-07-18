import { PartialType } from '@nestjs/swagger';
import { CreateCitizenNotificationDto } from './create-citizen_notification.dto';

export class UpdateCitizenNotificationDto extends PartialType(CreateCitizenNotificationDto) {}
