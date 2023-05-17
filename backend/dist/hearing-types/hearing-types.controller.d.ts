import { HearingTypesService } from './hearing-types.service';
export declare class HearingTypesController {
    private readonly hearingTypesService;
    constructor(hearingTypesService: HearingTypesService);
    create(data: any): Promise<import("./entities/hearing-type.entity").HearingType>;
    findAll(): Promise<import("./entities/hearing-type.entity").HearingType[]>;
    findAllActive(): Promise<import("./entities/hearing-type.entity").HearingType[]>;
    findOne(id: string): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
