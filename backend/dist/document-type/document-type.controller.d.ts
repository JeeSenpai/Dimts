import { DocumentTypeService } from './document-type.service';
export declare class DocumentTypeController {
    private readonly documentTypeService;
    constructor(documentTypeService: DocumentTypeService);
    create(data: any): Promise<import("./entities/document-type.entity").DocumentType>;
    findAll(): Promise<import("./entities/document-type.entity").DocumentType[]>;
    findAllActive(): Promise<import("./entities/document-type.entity").DocumentType[]>;
    findOne(id: string): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
