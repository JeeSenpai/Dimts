import { Repository } from 'typeorm';
import { HearingType } from './entities/hearing-type.entity';
export declare class HearingTypesService {
    private readonly hearingTypeRepository;
    constructor(hearingTypeRepository: Repository<HearingType>);
    create(data: any): Promise<HearingType>;
    findAll(): Promise<HearingType[]>;
    findAllActive(): Promise<HearingType[]>;
    findOne(id: number): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
