import { CourtHearingsService } from './court-hearings.service';
export declare class CourtHearingsController {
    private readonly courtHearingsService;
    constructor(courtHearingsService: CourtHearingsService);
    create(data: any): Promise<import("./entities/court-hearing.entity").CourtHearing>;
    findAll(): Promise<import("./entities/court-hearing.entity").CourtHearing[]>;
    findOne(id: string): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
