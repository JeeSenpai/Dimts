import { Repository } from 'typeorm';
import { Custody } from './entities/custody.entity';
export declare class CustodiesService {
    private readonly custodyRepository;
    constructor(custodyRepository: Repository<Custody>);
    create(data: any): Promise<Custody>;
    findAll(): Promise<Custody[]>;
    findAllCustodyById(id: any): Promise<Custody[]>;
    findOne(id: number): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
