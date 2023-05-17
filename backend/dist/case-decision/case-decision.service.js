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
exports.CaseDecisionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const case_decision_entity_1 = require("./entities/case-decision.entity");
let CaseDecisionService = class CaseDecisionService {
    constructor(caseDecisionRepository) {
        this.caseDecisionRepository = caseDecisionRepository;
    }
    async create(data) {
        const toSave = this.caseDecisionRepository.create({
            description: data.description,
            caseType: data.caseType,
            status: data.status
        });
        return await this.caseDecisionRepository.save(toSave);
    }
    async findAllCaseDecisionByCaseType(data) {
        return await this.caseDecisionRepository.createQueryBuilder('case_decision')
            .select([
            'case_decision',
            'case_type'
        ])
            .leftJoin('case_decision.caseType', 'case_type')
            .where('case_decision.caseType =:id', { id: data })
            .andWhere('case_decision.status = true')
            .getMany();
    }
    async findAll() {
        return await this.caseDecisionRepository.createQueryBuilder('case_decision')
            .select([
            'case_decision',
            'case_type'
        ])
            .leftJoin('case_decision.caseType', 'case_type')
            .getMany();
    }
    async update(data) {
        return await this.caseDecisionRepository.update(data.decisionId, {
            description: data.description,
            caseType: data.caseType,
            status: data.status
        });
    }
    remove(id) {
        return `This action removes a #${id} caseDecision`;
    }
};
CaseDecisionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(case_decision_entity_1.CaseDecision)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CaseDecisionService);
exports.CaseDecisionService = CaseDecisionService;
//# sourceMappingURL=case-decision.service.js.map