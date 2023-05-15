"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JudgesModule = void 0;
const common_1 = require("@nestjs/common");
const judges_service_1 = require("./judges.service");
const judges_controller_1 = require("./judges.controller");
const typeorm_1 = require("@nestjs/typeorm");
const judge_entity_1 = require("./entities/judge.entity");
let JudgesModule = class JudgesModule {
};
JudgesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([judge_entity_1.Judge])],
        controllers: [judges_controller_1.JudgesController],
        providers: [judges_service_1.JudgesService]
    })
], JudgesModule);
exports.JudgesModule = JudgesModule;
//# sourceMappingURL=judges.module.js.map