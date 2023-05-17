import { Repository } from 'typeorm';
import { CreateCaseTypeDto } from './dto/create-case-type.dto';
import { UpdateCaseTypeDto } from './dto/update-case-type.dto';
import { CaseType } from './entities/case-type.entity';
export declare class CaseTypeService {
    private readonly caseTypeRepository;
    constructor(caseTypeRepository: Repository<CaseType>);
    create(createCaseTypeDto: CreateCaseTypeDto): string;
    findAll(): Promise<CaseType[]>;
    findOne(id: number): string;
    update(id: number, updateCaseTypeDto: UpdateCaseTypeDto): string;
    remove(id: number): string;
}
