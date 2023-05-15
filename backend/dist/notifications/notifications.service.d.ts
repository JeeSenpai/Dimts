import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Repository } from 'typeorm';
import { Document } from 'src/documents/entities/document.entity';
import { Notification } from './entities/notification.entity';
export declare class NotificationsService {
    private readonly documentRepository;
    private readonly notifRepository;
    constructor(documentRepository: Repository<Document>, notifRepository: Repository<Notification>);
    create(createNotificationDto: CreateNotificationDto): string;
    findAllNotficationForOffice(officeId: number): Promise<Notification[]>;
    updateIsClicked(id: any): Promise<import("typeorm").UpdateResult>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNotificationDto: UpdateNotificationDto): string;
    remove(id: number): string;
}
