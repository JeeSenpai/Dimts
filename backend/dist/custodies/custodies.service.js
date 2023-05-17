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
exports.CustodiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const custody_entity_1 = require("./entities/custody.entity");
let CustodiesService = class CustodiesService {
    constructor(custodyRepository) {
        this.custodyRepository = custodyRepository;
    }
    async create(data) {
        const save = this.custodyRepository.create({
            case: data.caseId,
            fname: data.fname,
            mname: data.mname,
            lname: data.lname,
            suffix: data.suffix,
            height: data.height,
            weight: data.weight,
            blood_type: data.blood_type,
            birth_date: data.birthdate,
            address: data.address,
            pnp_status: data.pnp_status,
            pnp_status_date: data.pnp_status_date,
            bjmp_status: data.bjmp_status,
            bjmp_status_date: data.bjmp_status_date,
            bucor_status: data.bucor_status,
            bucor_status_date: data.bucor_status_date
        });
        return await this.custodyRepository.save(save);
    }
    async findAll() {
        return await this.custodyRepository.createQueryBuilder('custody')
            .select([
            'custody',
            'case',
            'case_type'
        ])
            .leftJoin('custody.case', 'case')
            .leftJoin('case.caseType', 'case_type')
            .orderBy('custody.updated_at', 'DESC')
            .getMany();
    }
    async findAllCustodyById(id) {
        return await this.custodyRepository.createQueryBuilder('custody')
            .select([
            'custody',
            'case',
            'case_type'
        ])
            .leftJoin('custody.case', 'case')
            .leftJoin('case.caseType', 'case_type')
            .where('case.id =:id', { id })
            .orderBy('custody.id', 'DESC')
            .getMany();
    }
    findOne(id) {
        return `This action returns a #${id} custody`;
    }
    async update(data) {
        return await this.custodyRepository.update(data.custodyId, {
            case: data.caseId,
            fname: data.fname,
            mname: data.mname,
            lname: data.lname,
            suffix: data.suffix,
            height: data.height,
            weight: data.weight,
            blood_type: data.blood_type,
            birth_date: data.birthdate,
            address: data.address,
            pnp_status: data.pnp_status,
            pnp_status_date: data.pnp_status_date,
            bjmp_status: data.bjmp_status,
            bjmp_status_date: data.bjmp_status_date,
            bucor_status: data.bucor_status,
            bucor_status_date: data.bucor_status_date
        });
    }
    remove(id) {
        return `This action removes a #${id} custody`;
    }
};
CustodiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(custody_entity_1.Custody)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustodiesService);
exports.CustodiesService = CustodiesService;
//# sourceMappingURL=custodies.service.js.map