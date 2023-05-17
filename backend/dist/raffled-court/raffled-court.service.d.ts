import { Repository } from 'typeorm';
import { RaffledCourt } from './entities/raffled-court.entity';
export declare class RaffledCourtService {
    private readonly raffledCourtRepository;
    constructor(raffledCourtRepository: Repository<RaffledCourt>);
    create(data: any): Promise<RaffledCourt>;
    findAll(): Promise<RaffledCourt[]>;
    findAllActive(): Promise<RaffledCourt[]>;
    findOne(id: number): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
