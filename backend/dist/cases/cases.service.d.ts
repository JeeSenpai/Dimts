import { CourtHearing } from 'src/court-hearings/entities/court-hearing.entity';
import { Repository } from 'typeorm';
import { Case } from './entities/case.entity';
export declare class CasesService {
    private readonly caseRepository;
    private readonly courtHearingRepository;
    constructor(caseRepository: Repository<Case>, courtHearingRepository: Repository<CourtHearing>);
    create(data: any): Promise<Case>;
    findAll(): Promise<Case[]>;
    findAllDocket(): Promise<Case[]>;
    findOne(id: number): Promise<Case>;
    findOneCaseWithProceedings(id: number): Promise<Case>;
    findCaseWithProceedings(): Promise<any[]>;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    updateCaseStatusToTrue(data: any): Promise<import("typeorm").UpdateResult>;
    updateCaseStatusToFalse(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
    findAllActiveCasesClusters(): Promise<Case[]>;
    findAllDocketCasesClusters(): Promise<Case[]>;
}
