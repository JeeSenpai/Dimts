import { CitizenService } from './citizen.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
export declare class CitizenController {
    private readonly citizenService;
    constructor(citizenService: CitizenService);
    create(createCitizenDto: CreateCitizenDto): string;
    findAll(): Promise<import("./entities/citizen.entity").Citizen[]>;
    findOne(id: string): string;
    update(id: string, updateCitizenDto: UpdateCitizenDto): string;
    remove(id: string): string;
}
