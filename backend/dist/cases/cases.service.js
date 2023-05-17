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
exports.CasesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const case_decision_entity_1 = require("../case-decision/entities/case-decision.entity");
const court_hearing_entity_1 = require("../court-hearings/entities/court-hearing.entity");
const hearing_type_entity_1 = require("../hearing-types/entities/hearing-type.entity");
const judge_entity_1 = require("../judges/entities/judge.entity");
const proceeding_entity_1 = require("../proceedings/entities/proceeding.entity");
const raffled_court_entity_1 = require("../raffled-court/entities/raffled-court.entity");
const typeorm_2 = require("typeorm");
const case_entity_1 = require("./entities/case.entity");
let CasesService = class CasesService {
    constructor(caseRepository, courtHearingRepository) {
        this.caseRepository = caseRepository;
        this.courtHearingRepository = courtHearingRepository;
    }
    async create(data) {
        const save = this.caseRepository.create({
            case_no: data.case_no,
            case_title: data.case_title,
            case_description: data.case_description,
            date_recieved: data.date_recieved,
            case_tag: data.case_tag,
            case_checklist: data.case_checklist,
            caseType: data.case_type,
            point_x: data.point_x,
            point_y: data.point_y,
            level: data.level,
            caseStatus: true
        });
        return await this.caseRepository.save(save);
    }
    async findAll() {
        return await this.caseRepository.createQueryBuilder('case')
            .select([
            'case',
            'case_type',
        ])
            .leftJoin('case.caseType', 'case_type')
            .leftJoinAndMapMany('case.courtHearings', court_hearing_entity_1.CourtHearing, 'court_hearing', 'case.id = court_hearing.case')
            .leftJoinAndMapOne('court_hearing.hearingType', hearing_type_entity_1.HearingType, 'hearing_type', 'court_hearing.hearingType = hearing_type.id')
            .orderBy('case.updated_at', 'DESC')
            .getMany();
    }
    async findAllDocket() {
        return await this.caseRepository.createQueryBuilder('case')
            .select([
            'case',
            'case_type',
        ])
            .leftJoin('case.caseType', 'case_type')
            .leftJoinAndMapMany('case.courtHearings', court_hearing_entity_1.CourtHearing, 'court_hearing', 'case.id = court_hearing.case')
            .leftJoinAndMapOne('court_hearing.hearingType', hearing_type_entity_1.HearingType, 'hearing_type', 'court_hearing.hearingType = hearing_type.id')
            .leftJoinAndMapMany('case.proceedings', proceeding_entity_1.Proceeding, 'proceedings', 'case.id = proceedings.case')
            .leftJoinAndMapOne('proceedings.caseDecision', case_decision_entity_1.CaseDecision, 'case_decision', 'proceedings.caseDecision = case_decision.id')
            .where('case.caseStatus = false')
            .orderBy('case.updated_at', 'DESC')
            .getMany();
    }
    async findOne(id) {
        return await this.caseRepository.createQueryBuilder('case')
            .select([
            'case',
            'case_type',
        ])
            .leftJoin('case.caseType', 'case_type')
            .leftJoinAndMapMany('case.courtHearings', court_hearing_entity_1.CourtHearing, 'court_hearing', 'case.id = court_hearing.case')
            .leftJoinAndMapOne('court_hearing.hearingType', hearing_type_entity_1.HearingType, 'hearing_type', 'court_hearing.hearingType = hearing_type.id')
            .where('case.id =:id', { id })
            .getOne();
    }
    async findOneCaseWithProceedings(id) {
        return await this.caseRepository.createQueryBuilder('case')
            .select([
            'case',
            'case_type',
        ])
            .leftJoin('case.caseType', 'case_type')
            .leftJoinAndMapMany('case.courtHearings', court_hearing_entity_1.CourtHearing, 'court_hearing', 'case.id = court_hearing.case')
            .leftJoinAndMapOne('court_hearing.hearingType', hearing_type_entity_1.HearingType, 'hearing_type', 'court_hearing.hearingType = hearing_type.id')
            .leftJoinAndMapOne('court_hearing.raffledCourt', raffled_court_entity_1.RaffledCourt, 'raffled_court', 'court_hearing.raffledCourt = raffled_court.id')
            .leftJoinAndMapOne('court_hearing.judgeAssigned', judge_entity_1.Judge, 'judge_assigned', 'court_hearing.judgeAssigned = judge_assigned.id')
            .where('case.id =:caseId', { caseId: id })
            .orderBy('court_hearing.id', 'DESC')
            .getOne();
    }
    async findCaseWithProceedings() {
        let caseArr = [];
        const cases = await this.caseRepository.createQueryBuilder('case')
            .select([
            'case',
            'case_type',
        ])
            .leftJoin('case.caseType', 'case_type')
            .orderBy('case.updated_at', 'DESC')
            .getMany();
        for (let i = 0; i < cases.length; i++) {
            const courtHearing = await this.courtHearingRepository.createQueryBuilder('court_hearing')
                .select([
                'court_hearing',
                'case',
            ])
                .leftJoin('court_hearing.case', 'case')
                .where('court_hearing.case =:id', { id: cases[i].id })
                .getOne();
            if (courtHearing) {
                caseArr.push(cases[i]);
            }
        }
        return caseArr;
    }
    async update(data) {
        return await this.caseRepository.update(data.case_id, {
            case_no: data.case_no,
            case_title: data.case_title,
            case_description: data.case_description,
            date_recieved: data.date_recieved,
            case_tag: data.case_tag,
            case_checklist: data.case_checklist,
            caseType: data.case_type,
            point_x: data.point_x,
            point_y: data.point_y,
            level: data.level
        });
    }
    async updateCaseStatusToTrue(data) {
        return await this.caseRepository.update(data.caseId, {
            caseStatus: true,
            reopenCount: data.reopenCount + 1
        });
    }
    async updateCaseStatusToFalse(data) {
        return await this.caseRepository.update(data.caseId, {
            caseStatus: false
        });
    }
    remove(id) {
        return `This action removes a #${id} case`;
    }
    async findAllActiveCasesClusters() {
        return await this.caseRepository.createQueryBuilder('case')
            .select([
            'case',
            'case_type',
        ])
            .leftJoin('case.caseType', 'case_type')
            .where('case.caseType = 1')
            .andWhere('case.caseStatus = true')
            .getMany();
    }
    async findAllDocketCasesClusters() {
        return await this.caseRepository.createQueryBuilder('case')
            .select([
            'case',
            'case_type',
        ])
            .leftJoin('case.caseType', 'case_type')
            .where('case.caseType = 1')
            .andWhere('case.caseStatus = false')
            .getMany();
    }
};
CasesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(case_entity_1.Case)),
    __param(1, (0, typeorm_1.InjectRepository)(court_hearing_entity_1.CourtHearing)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CasesService);
exports.CasesService = CasesService;
//# sourceMappingURL=cases.service.js.map