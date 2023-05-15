import { CaseStatusService } from './case-status.service';
import { CreateCaseStatusDto } from './dto/create-case-status.dto';
import { UpdateCaseStatusDto } from './dto/update-case-status.dto';
export declare class CaseStatusController {
    private readonly caseStatusService;
    constructor(caseStatusService: CaseStatusService);
    create(createCaseStatusDto: CreateCaseStatusDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCaseStatusDto: UpdateCaseStatusDto): string;
    remove(id: string): string;
}
