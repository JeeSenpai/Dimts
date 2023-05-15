"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseStatusModule = void 0;
const common_1 = require("@nestjs/common");
const case_status_service_1 = require("./case-status.service");
const case_status_controller_1 = require("./case-status.controller");
let CaseStatusModule = class CaseStatusModule {
};
CaseStatusModule = __decorate([
    (0, common_1.Module)({
        controllers: [case_status_controller_1.CaseStatusController],
        providers: [case_status_service_1.CaseStatusService]
    })
], CaseStatusModule);
exports.CaseStatusModule = CaseStatusModule;
//# sourceMappingURL=case-status.module.js.map