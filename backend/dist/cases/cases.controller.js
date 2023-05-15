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
exports.CasesController = void 0;
const common_1 = require("@nestjs/common");
const cases_service_1 = require("./cases.service");
let CasesController = class CasesController {
    constructor(casesService) {
        this.casesService = casesService;
    }
    create(data) {
        return this.casesService.create(data);
    }
    findAll() {
        return this.casesService.findAll();
    }
    findAllActiveCasesClusters() {
        return this.casesService.findAllActiveCasesClusters();
    }
    findAllDocketCasesClusters() {
        return this.casesService.findAllDocketCasesClusters();
    }
    findAllDocket() {
        return this.casesService.findAllDocket();
    }
    findOneCaseWithProceedings(id) {
        return this.casesService.findOneCaseWithProceedings(id);
    }
    findCaseWithProceedings() {
        return this.casesService.findCaseWithProceedings();
    }
    findOne(id) {
        return this.casesService.findOne(id);
    }
    update(data) {
        return this.casesService.update(data);
    }
    updateCaseStatusToTrue(data) {
        return this.casesService.updateCaseStatusToTrue(data);
    }
    updateCaseStatusToFalse(data) {
        return this.casesService.updateCaseStatusToFalse(data);
    }
    remove(id) {
        return this.casesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CasesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CasesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findAllActiveCasesClusters'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CasesController.prototype, "findAllActiveCasesClusters", null);
__decorate([
    (0, common_1.Get)('findAllDocketCasesClusters'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CasesController.prototype, "findAllDocketCasesClusters", null);
__decorate([
    (0, common_1.Get)('findAllDocket'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CasesController.prototype, "findAllDocket", null);
__decorate([
    (0, common_1.Get)('getProceedings/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CasesController.prototype, "findOneCaseWithProceedings", null);
__decorate([
    (0, common_1.Get)('proceedings'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CasesController.prototype, "findCaseWithProceedings", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CasesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CasesController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('updateCaseStatusToTrue'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CasesController.prototype, "updateCaseStatusToTrue", null);
__decorate([
    (0, common_1.Post)('updateCaseStatusToFalse'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CasesController.prototype, "updateCaseStatusToFalse", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CasesController.prototype, "remove", null);
CasesController = __decorate([
    (0, common_1.Controller)('cases'),
    __metadata("design:paramtypes", [cases_service_1.CasesService])
], CasesController);
exports.CasesController = CasesController;
//# sourceMappingURL=cases.controller.js.map