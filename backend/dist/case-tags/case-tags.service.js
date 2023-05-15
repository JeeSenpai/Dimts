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
exports.CaseTagsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const case_tag_entity_1 = require("./entities/case-tag.entity");
let CaseTagsService = class CaseTagsService {
    constructor(caseTagRepository) {
        this.caseTagRepository = caseTagRepository;
    }
    async create(data) {
        const toSave = this.caseTagRepository.create({
            description: data.description,
            caseType: data.caseType,
            status: data.status
        });
        return await this.caseTagRepository.save(toSave);
    }
    async findAllTagsByCaseType(id) {
        return await this.caseTagRepository.createQueryBuilder('case_tag')
            .select([
            'case_tag',
            'case_type'
        ])
            .leftJoin('case_tag.caseType', 'case_type')
            .where('case_tag.caseType =:id', { id })
            .andWhere('case_tag.status = true')
            .orderBy('case_tag.description', 'ASC')
            .getMany();
    }
    async findAll() {
        return await this.caseTagRepository.createQueryBuilder('case_tag')
            .select([
            'case_tag',
            'case_type'
        ])
            .leftJoin('case_tag.caseType', 'case_type')
            .orderBy('case_tag.description', 'ASC')
            .getMany();
    }
    findOne(id) {
        return `This action returns a #${id} caseTag`;
    }
    async update(data) {
        return await this.caseTagRepository.update(data.tagId, {
            description: data.description,
            caseType: data.caseType,
            status: data.status
        });
    }
    remove(id) {
        return `This action removes a #${id} caseTag`;
    }
};
CaseTagsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(case_tag_entity_1.CaseTag)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CaseTagsService);
exports.CaseTagsService = CaseTagsService;
//# sourceMappingURL=case-tags.service.js.map