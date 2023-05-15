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
exports.CaseTagsController = void 0;
const common_1 = require("@nestjs/common");
const case_tags_service_1 = require("./case-tags.service");
let CaseTagsController = class CaseTagsController {
    constructor(caseTagsService) {
        this.caseTagsService = caseTagsService;
    }
    create(data) {
        return this.caseTagsService.create(data);
    }
    findAllTagsByCaseType(id) {
        return this.caseTagsService.findAllTagsByCaseType(id);
    }
    findAll() {
        return this.caseTagsService.findAll();
    }
    findOne(id) {
        return this.caseTagsService.findOne(+id);
    }
    update(data) {
        return this.caseTagsService.update(data);
    }
    remove(id) {
        return this.caseTagsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CaseTagsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('findAllTagsByCaseType/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CaseTagsController.prototype, "findAllTagsByCaseType", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CaseTagsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaseTagsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CaseTagsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaseTagsController.prototype, "remove", null);
CaseTagsController = __decorate([
    (0, common_1.Controller)('case-tags'),
    __metadata("design:paramtypes", [case_tags_service_1.CaseTagsService])
], CaseTagsController);
exports.CaseTagsController = CaseTagsController;
//# sourceMappingURL=case-tags.controller.js.map