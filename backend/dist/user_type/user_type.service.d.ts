import { CreateUserTypeDto } from './dto/create-user_type.dto';
import { UpdateUserTypeDto } from './dto/update-user_type.dto';
import { UserType } from './entities/user_type.entity';
import { Repository } from 'typeorm';
export declare class UserTypeService {
    private readonly userTypeRepository;
    constructor(userTypeRepository: Repository<UserType>);
    create(createUserTypeDto: CreateUserTypeDto): string;
    findAll(): Promise<UserType[]>;
    findOne(id: number): string;
    update(id: number, updateUserTypeDto: UpdateUserTypeDto): string;
    remove(id: number): string;
}
