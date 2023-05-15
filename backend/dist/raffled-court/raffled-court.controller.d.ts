import { RaffledCourtService } from './raffled-court.service';
export declare class RaffledCourtController {
    private readonly raffledCourtService;
    constructor(raffledCourtService: RaffledCourtService);
    create(data: any): Promise<import("./entities/raffled-court.entity").RaffledCourt>;
    findAll(): Promise<import("./entities/raffled-court.entity").RaffledCourt[]>;
    findAllActive(): Promise<import("./entities/raffled-court.entity").RaffledCourt[]>;
    findOne(id: string): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
