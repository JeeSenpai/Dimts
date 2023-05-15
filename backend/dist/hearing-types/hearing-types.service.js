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
exports.HearingTypesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const hearing_type_entity_1 = require("./entities/hearing-type.entity");
let HearingTypesService = class HearingTypesService {
    constructor(hearingTypeRepository) {
        this.hearingTypeRepository = hearingTypeRepository;
    }
    async create(data) {
        const toSave = this.hearingTypeRepository.create({
            description: data.description,
            status: data.status
        });
        return await this.hearingTypeRepository.save(toSave);
    }
    async findAll() {
        return await this.hearingTypeRepository.find();
    }
    async findAllActive() {
        return await this.hearingTypeRepository.createQueryBuilder('hearing_type')
            .select([
            'hearing_type'
        ])
            .where('hearing_type.status = true')
            .getMany();
    }
    findOne(id) {
        return `This action returns a #${id} hearingType`;
    }
    async update(data) {
        return await this.hearingTypeRepository.update(data.hearingTypeId, {
            description: data.description,
            status: data.status
        });
    }
    remove(id) {
        return `This action removes a #${id} hearingType`;
    }
};
HearingTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hearing_type_entity_1.HearingType)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HearingTypesService);
exports.HearingTypesService = HearingTypesService;
//# sourceMappingURL=hearing-types.service.js.map