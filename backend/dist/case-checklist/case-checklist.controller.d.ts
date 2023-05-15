import { CaseChecklistService } from './case-checklist.service';
export declare class CaseChecklistController {
    private readonly caseChecklistService;
    constructor(caseChecklistService: CaseChecklistService);
    create(data: any): Promise<import("./entities/case-checklist.entity").CaseChecklist>;
    findAll(): string;
    findAllChecklistByCaseTag(id: number): Promise<import("./entities/case-checklist.entity").CaseChecklist[]>;
    findAllActiveChecklistByCaseTag(id: number): Promise<import("./entities/case-checklist.entity").CaseChecklist[]>;
    findOne(id: string): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
