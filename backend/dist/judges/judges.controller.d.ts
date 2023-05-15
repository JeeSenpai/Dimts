import { JudgesService } from './judges.service';
export declare class JudgesController {
    private readonly judgesService;
    constructor(judgesService: JudgesService);
    create(data: any): Promise<import("./entities/judge.entity").Judge>;
    findAll(): Promise<import("./entities/judge.entity").Judge[]>;
    findAllActive(): Promise<import("./entities/judge.entity").Judge[]>;
    findOne(id: string): string;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
