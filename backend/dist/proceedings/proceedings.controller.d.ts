import { ProceedingsService } from './proceedings.service';
export declare class ProceedingsController {
    private readonly proceedingsService;
    constructor(proceedingsService: ProceedingsService);
    create(data: any): Promise<import("./entities/proceeding.entity").Proceeding>;
    findAll(): string;
    findOne(id: number): Promise<import("./entities/proceeding.entity").Proceeding[]>;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
