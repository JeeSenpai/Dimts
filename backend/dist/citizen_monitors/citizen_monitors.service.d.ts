import { CreateCitizenMonitorDto } from './dto/create-citizen_monitor.dto';
import { UpdateCitizenMonitorDto } from './dto/update-citizen_monitor.dto';
import { CitizenMonitor } from './entities/citizen_monitor.entity';
import { Repository } from 'typeorm';
export declare class CitizenMonitorsService {
    private readonly citizenMonitorRepository;
    constructor(citizenMonitorRepository: Repository<CitizenMonitor>);
    create(createCitizenMonitorDto: CreateCitizenMonitorDto): string;
    findAll(): string;
    findAllMonitorByCitizen(citizenId: number): Promise<CitizenMonitor[]>;
    findOne(id: number): string;
    update(id: number, updateCitizenMonitorDto: UpdateCitizenMonitorDto): string;
    verifyCitizen(citizenId: number): Promise<import("typeorm").UpdateResult>;
    unverifyCitizen(citizenId: number): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
