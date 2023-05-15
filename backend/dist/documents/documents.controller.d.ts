import { DocumentsService } from './documents.service';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    create(data: any): Promise<import("./entities/document.entity").Document>;
    findAllSendedDocs(id: number): Promise<import("./entities/document.entity").Document[]>;
    findAllReceivedDocs(id: number): Promise<import("./entities/document.entity").Document[]>;
    findOneByCaseId(id: number): Promise<import("./entities/document.entity").Document[]>;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    sendDocument(data: any): Promise<import("typeorm").UpdateResult>;
    acknowledgeDocument(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
