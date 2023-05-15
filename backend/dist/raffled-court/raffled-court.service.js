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
exports.RaffledCourtService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const raffled_court_entity_1 = require("./entities/raffled-court.entity");
let RaffledCourtService = class RaffledCourtService {
    constructor(raffledCourtRepository) {
        this.raffledCourtRepository = raffledCourtRepository;
    }
    async create(data) {
        const toSave = this.raffledCourtRepository.create({
            description: data.description,
            status: data.status
        });
        return await this.raffledCourtRepository.save(toSave);
    }
    findAll() {
        return this.raffledCourtRepository.find();
    }
    async findAllActive() {
        return this.raffledCourtRepository.createQueryBuilder('raffled_court')
            .where('raffled_court.status = true')
            .getMany();
    }
    findOne(id) {
        return `This action returns a #${id} raffledCourt`;
    }
    async update(data) {
        return await this.raffledCourtRepository.update(data.raffledCourtId, {
            description: data.description,
            status: data.status
        });
    }
    remove(id) {
        return `This action removes a #${id} raffledCourt`;
    }
};
RaffledCourtService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(raffled_court_entity_1.RaffledCourt)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RaffledCourtService);
exports.RaffledCourtService = RaffledCourtService;
//# sourceMappingURL=raffled-court.service.js.map