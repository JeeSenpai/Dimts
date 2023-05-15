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
exports.OfficesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const office_entity_1 = require("./entities/office.entity");
let OfficesService = class OfficesService {
    constructor(officeRepository) {
        this.officeRepository = officeRepository;
    }
    async create(data) {
        const toSave = this.officeRepository.create({
            description: data.description,
            status: data.status
        });
        return await this.officeRepository.save(toSave);
    }
    findAll() {
        return this.officeRepository.find();
    }
    findAllActive() {
        return this.officeRepository.createQueryBuilder('office')
            .where('office.status = true')
            .getMany();
    }
    findOne(id) {
        return `This action returns a #${id} office`;
    }
    async update(data) {
        return await this.officeRepository.update(data.officeId, {
            description: data.description,
            status: data.status
        });
    }
    remove(id) {
        return `This action removes a #${id} office`;
    }
};
OfficesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(office_entity_1.Office)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OfficesService);
exports.OfficesService = OfficesService;
//# sourceMappingURL=offices.service.js.map