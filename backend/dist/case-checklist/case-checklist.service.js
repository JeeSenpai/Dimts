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
exports.CaseChecklistService = void 0;
const common_1 = require("@nestjs/common");
const case_checklist_entity_1 = require("./entities/case-checklist.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CaseChecklistService = class CaseChecklistService {
    constructor(caseCheckRepository) {
        this.caseCheckRepository = caseCheckRepository;
    }
    async create(data) {
        const save = this.caseCheckRepository.create({
            caseTag: data.caseTag,
            description: data.description,
            minPenalty: data.minPenalty,
            maxPenalty: data.maxPenalty,
            status: data.status
        });
        return await this.caseCheckRepository.save(save);
    }
    findAll() {
        return `This action returns all caseChecklist`;
    }
    async findAllChecklistByCaseTag(id) {
        return await this.caseCheckRepository.createQueryBuilder('case_checklist')
            .select([
            'case_checklist',
        ])
            .where('case_checklist.caseTag =:id', { id })
            .getMany();
    }
    async findAllActiveChecklistByCaseTag(id) {
        return await this.caseCheckRepository.createQueryBuilder('case_checklist')
            .select([
            'case_checklist',
            'case_tag'
        ])
            .leftJoin('case_checklist.caseTag', 'case_tag')
            .where('case_checklist.caseTag =:id', { id })
            .andWhere('case_checklist.status = true')
            .getMany();
    }
    findOne(id) {
        return `This action returns a #${id} caseChecklist`;
    }
    async update(data) {
        return await this.caseCheckRepository.update(data.id, {
            caseTag: data.caseTag,
            description: data.description,
            minPenalty: data.minPenalty,
            maxPenalty: data.maxPenalty,
            status: data.status
        });
    }
    remove(id) {
        return `This action removes a #${id} caseChecklist`;
    }
};
CaseChecklistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(case_checklist_entity_1.CaseChecklist)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CaseChecklistService);
exports.CaseChecklistService = CaseChecklistService;
//# sourceMappingURL=case-checklist.service.js.map