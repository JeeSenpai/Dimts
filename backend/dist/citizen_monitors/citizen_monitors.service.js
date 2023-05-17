"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitizenMonitorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const citizen_monitor_entity_1 = require("./entities/citizen_monitor.entity");
const typeorm_2 = require("typeorm");
let CitizenMonitorsService = class CitizenMonitorsService {
    constructor(citizenMonitorRepository) {
        this.citizenMonitorRepository = citizenMonitorRepository;
    }
    create(createCitizenMonitorDto) {
        return 'This action adds a new citizenMonitor';
    }
    findAll() {
        return `This action returns all citizenMonitors`;
    }
    async findAllMonitorByCitizen(citizenId) {
        return await this.citizenMonitorRepository.createQueryBuilder('citizen_monitor')
            .select([
            'citizen_monitor',
            'case'
        ])
            .leftJoin('citizen_monitor.case', 'case')
            .where('citizen_monitor.citizen =:citizenId', { citizenId })
            .orderBy('citizen_monitor.created_at', 'DESC')
            .getMany();
    }
    findOne(id) {
        return `This action returns a #${id} citizenMonitor`;
    }
    update(id, updateCitizenMonitorDto) {
        return `This action updates a #${id} citizenMonitor`;
    }
    async verifyCitizen(citizenId) {
        return await this.citizenMonitorRepository.update(citizenId, { is_verified: true });
    }
    async unverifyCitizen(citizenId) {
        return await this.citizenMonitorRepository.update(citizenId, { is_verified: false });
    }
    remove(id) {
        return `This action removes a #${id} citizenMonitor`;
    }
};
CitizenMonitorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(citizen_monitor_entity_1.CitizenMonitor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CitizenMonitorsService);
exports.CitizenMonitorsService = CitizenMonitorsService;
//# sourceMappingURL=citizen_monitors.service.js.map