import { Repository } from 'typeorm';
import { Office } from './entities/office.entity';
export declare class OfficesService {
    private readonly officeRepository;
    constructor(officeRepository: Repository<Office>);
    create(data: any): Promise<Office>;
    findAll(): Promise<Office[]>;
    findAllActive(): Promise<Office[]>;
    findOne(id: number): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
