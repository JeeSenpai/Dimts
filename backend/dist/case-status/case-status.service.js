"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseStatusService = void 0;
const common_1 = require("@nestjs/common");
let CaseStatusService = class CaseStatusService {
    create(createCaseStatusDto) {
        return 'This action adds a new caseStatus';
    }
    findAll() {
        return `This action returns all caseStatus`;
    }
    findOne(id) {
        return `This action returns a #${id} caseStatus`;
    }
    update(id, updateCaseStatusDto) {
        return `This action updates a #${id} caseStatus`;
    }
    remove(id) {
        return `This action removes a #${id} caseStatus`;
    }
};
CaseStatusService = __decorate([
    (0, common_1.Injectable)()
], CaseStatusService);
exports.CaseStatusService = CaseStatusService;
//# sourceMappingURL=case-status.service.js.map