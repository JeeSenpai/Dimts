import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { Citizen } from './entities/citizen.entity';
import { Repository } from 'typeorm';
export declare class CitizenService {
    private readonly citizenRepository;
    constructor(citizenRepository: Repository<Citizen>);
    create(createCitizenDto: CreateCitizenDto): string;
    findAll(): Promise<Citizen[]>;
    findOne(id: number): string;
    update(id: number, updateCitizenDto: UpdateCitizenDto): string;
    remove(id: number): string;
}
