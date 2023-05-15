"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaffledCourtModule = void 0;
const common_1 = require("@nestjs/common");
const raffled_court_service_1 = require("./raffled-court.service");
const raffled_court_controller_1 = require("./raffled-court.controller");
const typeorm_1 = require("@nestjs/typeorm");
const raffled_court_entity_1 = require("./entities/raffled-court.entity");
let RaffledCourtModule = class RaffledCourtModule {
};
RaffledCourtModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([raffled_court_entity_1.RaffledCourt])],
        controllers: [raffled_court_controller_1.RaffledCourtController],
        providers: [raffled_court_service_1.RaffledCourtService]
    })
], RaffledCourtModule);
exports.RaffledCourtModule = RaffledCourtModule;
//# sourceMappingURL=raffled-court.module.js.map