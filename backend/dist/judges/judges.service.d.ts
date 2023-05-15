import { Repository } from 'typeorm';
import { Judge } from './entities/judge.entity';
export declare class JudgesService {
    private readonly judgeRepository;
    constructor(judgeRepository: Repository<Judge>);
    create(data: any): Promise<Judge>;
    findAll(): Promise<Judge[]>;
    findAllActive(): Promise<Judge[]>;
    findOne(id: number): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
