import { CaseTagsService } from './case-tags.service';
export declare class CaseTagsController {
    private readonly caseTagsService;
    constructor(caseTagsService: CaseTagsService);
    create(data: any): Promise<import("./entities/case-tag.entity").CaseTag>;
    findAllTagsByCaseType(id: number): Promise<import("./entities/case-tag.entity").CaseTag[]>;
    findAll(): Promise<import("./entities/case-tag.entity").CaseTag[]>;
    findOne(id: string): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
