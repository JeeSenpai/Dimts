import { Repository } from 'typeorm';
import { CaseDecision } from './entities/case-decision.entity';
export declare class CaseDecisionService {
    private readonly caseDecisionRepository;
    constructor(caseDecisionRepository: Repository<CaseDecision>);
    create(data: any): Promise<CaseDecision>;
    findAllCaseDecisionByCaseType(data: number): Promise<CaseDecision[]>;
    findAll(): Promise<CaseDecision[]>;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
