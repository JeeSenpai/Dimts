import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserDetails } from './entities/user_detail.entity';
export declare class UsersService {
    private readonly userRepository;
    private readonly userDetailsRepository;
    constructor(userRepository: Repository<User>, userDetailsRepository: Repository<UserDetails>);
    create(data: any): Promise<User>;
    update(data: any): Promise<import("typeorm").UpdateResult>;
    findAll(): Promise<User[]>;
    findUserByEmail(email: string): Promise<any>;
    findOne(id: number): Promise<User>;
    updateOtp(id: number): Promise<any>;
    resetPassword(id: number): Promise<import("typeorm").UpdateResult>;
}
