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
exports.ProceedingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const proceeding_entity_1 = require("./entities/proceeding.entity");
let ProceedingsService = class ProceedingsService {
    constructor(proceedingRepository) {
        this.proceedingRepository = proceedingRepository;
    }
    async create(data) {
        const save = this.proceedingRepository.create({
            case: data.caseId,
            caseDecision: data.caseDecision,
            last_court_action: data.last_court_action,
            minimum_sentence: data.minimum_sentence,
            minimum_duration: data.minimum_duration,
            maximum_sentence: data.maximum_sentence,
            maximum_duration: data.maximum_duration,
            minimum_fines: data.minimum_fines,
            maximum_fines: data.maximum_fines,
            remarks: data.remarks
        });
        return await this.proceedingRepository.save(save);
    }
    findAll() {
        return `This action returns all proceedings`;
    }
    async findOne(caseId) {
        return await this.proceedingRepository.createQueryBuilder('proceeding')
            .select([
            'proceeding',
            'case',
            'case_type',
            'case_decision'
        ])
            .leftJoin('proceeding.case', 'case')
            .leftJoin('case.caseType', 'case_type')
            .leftJoin('proceeding.caseDecision', 'case_decision')
            .where('proceeding.case =:id', { id: caseId })
            .orderBy('proceeding.id', 'DESC')
            .getMany();
    }
    async update(data) {
        return await this.proceedingRepository.update(data.proceedingId, {
            case: data.caseId,
            caseDecision: data.caseDecision,
            last_court_action: data.last_court_action,
            minimum_sentence: data.minimum_sentence,
            minimum_duration: data.minimum_duration,
            maximum_sentence: data.maximum_sentence,
            maximum_duration: data.maximum_duration,
            minimum_fines: data.minimum_fines,
            maximum_fines: data.maximum_fines,
            remarks: data.remarks
        });
    }
    remove(id) {
        return `This action removes a #${id} proceeding`;
    }
};
ProceedingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(proceeding_entity_1.Proceeding)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProceedingsService);
exports.ProceedingsService = ProceedingsService;
//# sourceMappingURL=proceedings.service.js.map