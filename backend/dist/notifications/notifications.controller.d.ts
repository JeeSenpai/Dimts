import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(createNotificationDto: CreateNotificationDto): string;
    findAll(): string;
    findAllNotficationForOffice(officeId: number): Promise<import("./entities/notification.entity").Notification[]>;
    updateIsClicked(id: any): Promise<import("typeorm").UpdateResult>;
    findOne(id: string): string;
    update(id: string, updateNotificationDto: UpdateNotificationDto): string;
    remove(id: string): string;
}
