import { Repository } from 'typeorm';
import { Document } from './entities/document.entity';
import { Notification } from 'src/notifications/entities/notification.entity';
import { User } from 'src/users/entities/user.entity';
import { MailService } from 'src/mail/mail.service';
export declare class DocumentsService {
    private readonly documentRepository;
    private readonly notifRepository;
    private readonly userRepository;
    private mailService;
    constructor(documentRepository: Repository<Document>, notifRepository: Repository<Notification>, userRepository: Repository<User>, mailService: MailService);
    create(data: any): Promise<Document>;
    findAllSendedDocs(id: number): Promise<Document[]>;
    findAllReceivedDocs(id: number): Promise<Document[]>;
    findOneByCaseId(id: number): Promise<Document[]>;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    sendDocument(data: any): Promise<import("typeorm").UpdateResult>;
    acknowledgeDocument(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
