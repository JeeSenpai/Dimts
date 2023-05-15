import { CustodiesService } from './custodies.service';
export declare class CustodiesController {
    private readonly custodiesService;
    constructor(custodiesService: CustodiesService);
    create(data: any): Promise<import("./entities/custody.entity").Custody>;
    findAll(): Promise<import("./entities/custody.entity").Custody[]>;
    findAllCustodyById(id: any): Promise<import("./entities/custody.entity").Custody[]>;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
