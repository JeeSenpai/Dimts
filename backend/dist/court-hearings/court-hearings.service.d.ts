import { Repository } from 'typeorm';
import { CourtHearing } from './entities/court-hearing.entity';
export declare class CourtHearingsService {
    private readonly courtHearingRepository;
    constructor(courtHearingRepository: Repository<CourtHearing>);
    create(data: any): Promise<CourtHearing>;
    findAll(): Promise<CourtHearing[]>;
    findOne(id: number): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
