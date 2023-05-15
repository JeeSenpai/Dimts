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
exports.CaseDecisionController = void 0;
const common_1 = require("@nestjs/common");
const case_decision_service_1 = require("./case-decision.service");
let CaseDecisionController = class CaseDecisionController {
    constructor(caseDecisionService) {
        this.caseDecisionService = caseDecisionService;
    }
    create(data) {
        return this.caseDecisionService.create(data);
    }
    findAllCaseDecisionByCaseType(caseType) {
        return this.caseDecisionService.findAllCaseDecisionByCaseType(caseType);
    }
    findAll() {
        return this.caseDecisionService.findAll();
    }
    update(data) {
        return this.caseDecisionService.update(data);
    }
    remove(id) {
        return this.caseDecisionService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CaseDecisionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('findAllCaseDecisionByCaseType/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CaseDecisionController.prototype, "findAllCaseDecisionByCaseType", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CaseDecisionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CaseDecisionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaseDecisionController.prototype, "remove", null);
CaseDecisionController = __decorate([
    (0, common_1.Controller)('case-decision'),
    __metadata("design:paramtypes", [case_decision_service_1.CaseDecisionService])
], CaseDecisionController);
exports.CaseDecisionController = CaseDecisionController;
//# sourceMappingURL=case-decision.controller.js.map