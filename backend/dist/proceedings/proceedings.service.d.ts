import { Repository } from 'typeorm';
import { Proceeding } from './entities/proceeding.entity';
export declare class ProceedingsService {
    private readonly proceedingRepository;
    constructor(proceedingRepository: Repository<Proceeding>);
    create(data: any): Promise<Proceeding>;
    findAll(): string;
    findOne(caseId: number): Promise<Proceeding[]>;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
