import { Repository } from 'typeorm';
import { CaseTag } from './entities/case-tag.entity';
export declare class CaseTagsService {
    private readonly caseTagRepository;
    constructor(caseTagRepository: Repository<CaseTag>);
    create(data: any): Promise<CaseTag>;
    findAllTagsByCaseType(id: number): Promise<CaseTag[]>;
    findAll(): Promise<CaseTag[]>;
    findOne(id: number): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
