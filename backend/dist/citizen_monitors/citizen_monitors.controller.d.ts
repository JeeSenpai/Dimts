import { CitizenMonitorsService } from './citizen_monitors.service';
import { CreateCitizenMonitorDto } from './dto/create-citizen_monitor.dto';
import { UpdateCitizenMonitorDto } from './dto/update-citizen_monitor.dto';
export declare class CitizenMonitorsController {
    private readonly citizenMonitorsService;
    constructor(citizenMonitorsService: CitizenMonitorsService);
    create(createCitizenMonitorDto: CreateCitizenMonitorDto): string;
    findAll(): string;
    findAllMonitorByCitizen(id: number): Promise<import("./entities/citizen_monitor.entity").CitizenMonitor[]>;
    findOne(id: string): string;
    update(id: string, updateCitizenMonitorDto: UpdateCitizenMonitorDto): string;
    verifyCitizen(id: number): Promise<import("typeorm").UpdateResult>;
    unverifyCitizen(id: number): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
