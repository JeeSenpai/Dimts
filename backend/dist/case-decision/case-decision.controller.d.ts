import { CaseDecisionService } from './case-decision.service';
export declare class CaseDecisionController {
    private readonly caseDecisionService;
    constructor(caseDecisionService: CaseDecisionService);
    create(data: any): Promise<import("./entities/case-decision.entity").CaseDecision>;
    findAllCaseDecisionByCaseType(caseType: number): Promise<import("./entities/case-decision.entity").CaseDecision[]>;
    findAll(): Promise<import("./entities/case-decision.entity").CaseDecision[]>;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
