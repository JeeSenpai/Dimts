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
exports.CaseStatusController = void 0;
const common_1 = require("@nestjs/common");
const case_status_service_1 = require("./case-status.service");
const create_case_status_dto_1 = require("./dto/create-case-status.dto");
const update_case_status_dto_1 = require("./dto/update-case-status.dto");
let CaseStatusController = class CaseStatusController {
    constructor(caseStatusService) {
        this.caseStatusService = caseStatusService;
    }
    create(createCaseStatusDto) {
        return this.caseStatusService.create(createCaseStatusDto);
    }
    findAll() {
        return this.caseStatusService.findAll();
    }
    findOne(id) {
        return this.caseStatusService.findOne(+id);
    }
    update(id, updateCaseStatusDto) {
        return this.caseStatusService.update(+id, updateCaseStatusDto);
    }
    remove(id) {
        return this.caseStatusService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_case_status_dto_1.CreateCaseStatusDto]),
    __metadata("design:returntype", void 0)
], CaseStatusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CaseStatusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaseStatusController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_case_status_dto_1.UpdateCaseStatusDto]),
    __metadata("design:returntype", void 0)
], CaseStatusController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaseStatusController.prototype, "remove", null);
CaseStatusController = __decorate([
    (0, common_1.Controller)('case-status'),
    __metadata("design:paramtypes", [case_status_service_1.CaseStatusService])
], CaseStatusController);
exports.CaseStatusController = CaseStatusController;
//# sourceMappingURL=case-status.controller.js.map