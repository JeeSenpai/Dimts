import { CasesService } from './cases.service';
export declare class CasesController {
    private readonly casesService;
    constructor(casesService: CasesService);
    create(data: any): Promise<import("./entities/case.entity").Case>;
    findAll(): Promise<import("./entities/case.entity").Case[]>;
    findAllActiveCasesClusters(): Promise<import("./entities/case.entity").Case[]>;
    findAllDocketCasesClusters(): Promise<import("./entities/case.entity").Case[]>;
    findAllDocket(): Promise<import("./entities/case.entity").Case[]>;
    findOneCaseWithProceedings(id: number): Promise<import("./entities/case.entity").Case>;
    findCaseWithProceedings(): Promise<any[]>;
    findOne(id: number): Promise<import("./entities/case.entity").Case>;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    updateCaseStatusToTrue(data: any): Promise<import("typeorm").UpdateResult>;
    updateCaseStatusToFalse(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
