import { UserTypeService } from './user_type.service';
import { CreateUserTypeDto } from './dto/create-user_type.dto';
import { UpdateUserTypeDto } from './dto/update-user_type.dto';
export declare class UserTypeController {
    private readonly userTypeService;
    constructor(userTypeService: UserTypeService);
    create(createUserTypeDto: CreateUserTypeDto): string;
    findAll(): Promise<import("./entities/user_type.entity").UserType[]>;
    findOne(id: string): string;
    update(id: string, updateUserTypeDto: UpdateUserTypeDto): string;
    remove(id: string): string;
}
