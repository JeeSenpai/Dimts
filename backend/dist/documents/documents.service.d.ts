import { Repository } from 'typeorm';
import { Document } from './entities/document.entity';
import { Notification } from 'src/notifications/entities/notification.entity';
export declare class DocumentsService {
    private readonly documentRepository;
    private readonly notifRepository;
    constructor(documentRepository: Repository<Document>, notifRepository: Repository<Notification>);
    create(data: any): Promise<Document>;
    findAllSendedDocs(id: number): Promise<Document[]>;
    findAllReceivedDocs(id: number): Promise<Document[]>;
    findOneByCaseId(id: number): Promise<Document[]>;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    sendDocument(data: any): Promise<import("typeorm").UpdateResult>;
    acknowledgeDocument(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
