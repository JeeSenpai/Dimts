import { OfficesService } from './offices.service';
export declare class OfficesController {
    private readonly officesService;
    constructor(officesService: OfficesService);
    create(data: any): Promise<import("./entities/office.entity").Office>;
    findAll(): Promise<import("./entities/office.entity").Office[]>;
    findAllActive(): Promise<import("./entities/office.entity").Office[]>;
    findOne(id: string): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
