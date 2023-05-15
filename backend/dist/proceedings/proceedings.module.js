"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProceedingsModule = void 0;
const common_1 = require("@nestjs/common");
const proceedings_service_1 = require("./proceedings.service");
const proceedings_controller_1 = require("./proceedings.controller");
const typeorm_1 = require("@nestjs/typeorm");
const proceeding_entity_1 = require("./entities/proceeding.entity");
let ProceedingsModule = class ProceedingsModule {
};
ProceedingsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([proceeding_entity_1.Proceeding])],
        controllers: [proceedings_controller_1.ProceedingsController],
        providers: [proceedings_service_1.ProceedingsService]
    })
], ProceedingsModule);
exports.ProceedingsModule = ProceedingsModule;
//# sourceMappingURL=proceedings.module.js.map