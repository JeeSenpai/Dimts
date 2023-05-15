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
exports.CourtHearingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const court_hearing_entity_1 = require("./entities/court-hearing.entity");
let CourtHearingsService = class CourtHearingsService {
    constructor(courtHearingRepository) {
        this.courtHearingRepository = courtHearingRepository;
    }
    async create(data) {
        const save = this.courtHearingRepository.create({
            case: data.case_id,
            hearingType: data.hearing_type,
            hearing_schedule: data.hearing_schedule,
            start_time: data.start_time,
            end_time: data.end_time,
            judgeAssigned: data.judge,
            raffledCourt: data.raffled_court,
            status: data.status,
            remarks: data.remarks
        });
        return await this.courtHearingRepository.save(save);
    }
    async findAll() {
        return await this.courtHearingRepository.createQueryBuilder('court_hearing')
            .select([
            'court_hearing',
            'case',
            'case_type',
            'hearing_type',
            'raffled_court',
            'judge'
        ])
            .leftJoin('court_hearing.case', 'case')
            .leftJoin('case.caseType', 'case_type')
            .leftJoin('court_hearing.raffledCourt', 'raffled_court')
            .leftJoin('court_hearing.judgeAssigned', 'judge')
            .leftJoin('court_hearing.hearingType', 'hearing_type')
            .orderBy('court_hearing.updated_at', 'DESC')
            .getMany();
    }
    findOne(id) {
        return `This action returns a #${id} courtHearing`;
    }
    async update(data) {
        return await this.courtHearingRepository.update(data.court_hearing_id, {
            case: data.case_id,
            hearingType: data.hearing_type,
            hearing_schedule: data.hearing_schedule,
            start_time: data.start_time,
            end_time: data.end_time,
            judgeAssigned: data.judge,
            raffledCourt: data.raffled_court,
            status: data.status,
            remarks: data.remarks
        });
    }
    remove(id) {
        return `This action removes a #${id} courtHearing`;
    }
};
CourtHearingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(court_hearing_entity_1.CourtHearing)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CourtHearingsService);
exports.CourtHearingsService = CourtHearingsService;
//# sourceMappingURL=court-hearings.service.js.map