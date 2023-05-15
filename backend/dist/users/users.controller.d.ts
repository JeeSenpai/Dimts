import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: any): Promise<import("./entities/user.entity").User>;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    findOne(id: number): Promise<import("./entities/user.entity").User>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    resetPass(id: number): Promise<import("typeorm").UpdateResult>;
}
