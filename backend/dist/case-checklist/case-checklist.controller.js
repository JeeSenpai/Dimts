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
exports.CaseChecklistController = void 0;
const common_1 = require("@nestjs/common");
const case_checklist_service_1 = require("./case-checklist.service");
let CaseChecklistController = class CaseChecklistController {
    constructor(caseChecklistService) {
        this.caseChecklistService = caseChecklistService;
    }
    create(data) {
        return this.caseChecklistService.create(data);
    }
    findAll() {
        return this.caseChecklistService.findAll();
    }
    findAllChecklistByCaseTag(id) {
        return this.caseChecklistService.findAllChecklistByCaseTag(id);
    }
    findAllActiveChecklistByCaseTag(id) {
        return this.caseChecklistService.findAllActiveChecklistByCaseTag(id);
    }
    findOne(id) {
        return this.caseChecklistService.findOne(+id);
    }
    update(data) {
        return this.caseChecklistService.update(data);
    }
    remove(id) {
        return this.caseChecklistService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CaseChecklistController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CaseChecklistController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findAllChecklistByCaseTag/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CaseChecklistController.prototype, "findAllChecklistByCaseTag", null);
__decorate([
    (0, common_1.Get)('findAllActiveChecklistByCaseTag/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CaseChecklistController.prototype, "findAllActiveChecklistByCaseTag", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaseChecklistController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CaseChecklistController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaseChecklistController.prototype, "remove", null);
CaseChecklistController = __decorate([
    (0, common_1.Controller)('case-checklist'),
    __metadata("design:paramtypes", [case_checklist_service_1.CaseChecklistService])
], CaseChecklistController);
exports.CaseChecklistController = CaseChecklistController;
//# sourceMappingURL=case-checklist.controller.js.map