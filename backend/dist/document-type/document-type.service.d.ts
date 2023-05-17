import { Repository } from 'typeorm';
import { DocumentType } from './entities/document-type.entity';
export declare class DocumentTypeService {
    private readonly documentTypeRepository;
    constructor(documentTypeRepository: Repository<DocumentType>);
    create(data: any): Promise<DocumentType>;
    findAll(): Promise<DocumentType[]>;
    findAllActive(): Promise<DocumentType[]>;
    findOne(id: number): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
