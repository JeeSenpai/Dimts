import { CaseChecklist } from './entities/case-checklist.entity';
import { Repository } from 'typeorm';
export declare class CaseChecklistService {
    private readonly caseCheckRepository;
    constructor(caseCheckRepository: Repository<CaseChecklist>);
    create(data: any): Promise<CaseChecklist>;
    findAll(): string;
    findAllChecklistByCaseTag(id: number): Promise<CaseChecklist[]>;
    findAllActiveChecklistByCaseTag(id: number): Promise<CaseChecklist[]>;
    findOne(id: number): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
