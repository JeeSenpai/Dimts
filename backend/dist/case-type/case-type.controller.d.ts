import { CaseTypeService } from './case-type.service';
import { CreateCaseTypeDto } from './dto/create-case-type.dto';
import { UpdateCaseTypeDto } from './dto/update-case-type.dto';
export declare class CaseTypeController {
    private readonly caseTypeService;
    constructor(caseTypeService: CaseTypeService);
    create(createCaseTypeDto: CreateCaseTypeDto): string;
    findAll(): Promise<import("./entities/case-type.entity").CaseType[]>;
    findOne(id: string): string;
    update(id: string, updateCaseTypeDto: UpdateCaseTypeDto): string;
    remove(id: string): string;
}
