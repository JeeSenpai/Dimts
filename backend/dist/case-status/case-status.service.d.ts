import { CreateCaseStatusDto } from './dto/create-case-status.dto';
import { UpdateCaseStatusDto } from './dto/update-case-status.dto';
export declare class CaseStatusService {
    create(createCaseStatusDto: CreateCaseStatusDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCaseStatusDto: UpdateCaseStatusDto): string;
    remove(id: number): string;
}
