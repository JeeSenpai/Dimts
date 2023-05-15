"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtHearingsModule = void 0;
const common_1 = require("@nestjs/common");
const court_hearings_service_1 = require("./court-hearings.service");
const court_hearings_controller_1 = require("./court-hearings.controller");
const typeorm_1 = require("@nestjs/typeorm");
const court_hearing_entity_1 = require("./entities/court-hearing.entity");
let CourtHearingsModule = class CourtHearingsModule {
};
CourtHearingsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([court_hearing_entity_1.CourtHearing])],
        controllers: [court_hearings_controller_1.CourtHearingsController],
        providers: [court_hearings_service_1.CourtHearingsService]
    })
], CourtHearingsModule);
exports.CourtHearingsModule = CourtHearingsModule;
//# sourceMappingURL=court-hearings.module.js.map