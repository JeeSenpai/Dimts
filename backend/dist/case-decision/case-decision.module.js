"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseDecisionModule = void 0;
const common_1 = require("@nestjs/common");
const case_decision_service_1 = require("./case-decision.service");
const case_decision_controller_1 = require("./case-decision.controller");
const typeorm_1 = require("@nestjs/typeorm");
const case_decision_entity_1 = require("./entities/case-decision.entity");
let CaseDecisionModule = class CaseDecisionModule {
};
CaseDecisionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([case_decision_entity_1.CaseDecision])],
        controllers: [case_decision_controller_1.CaseDecisionController],
        providers: [case_decision_service_1.CaseDecisionService]
    })
], CaseDecisionModule);
exports.CaseDecisionModule = CaseDecisionModule;
//# sourceMappingURL=case-decision.module.js.map