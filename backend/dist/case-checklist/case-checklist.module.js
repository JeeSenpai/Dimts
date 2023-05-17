"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseChecklistModule = void 0;
const common_1 = require("@nestjs/common");
const case_checklist_service_1 = require("./case-checklist.service");
const case_checklist_controller_1 = require("./case-checklist.controller");
const typeorm_1 = require("@nestjs/typeorm");
const case_checklist_entity_1 = require("./entities/case-checklist.entity");
let CaseChecklistModule = class CaseChecklistModule {
};
CaseChecklistModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([case_checklist_entity_1.CaseChecklist])],
        controllers: [case_checklist_controller_1.CaseChecklistController],
        providers: [case_checklist_service_1.CaseChecklistService]
    })
], CaseChecklistModule);
exports.CaseChecklistModule = CaseChecklistModule;
//# sourceMappingURL=case-checklist.module.js.map