"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HearingTypesModule = void 0;
const common_1 = require("@nestjs/common");
const hearing_types_service_1 = require("./hearing-types.service");
const hearing_types_controller_1 = require("./hearing-types.controller");
const hearing_type_entity_1 = require("./entities/hearing-type.entity");
const typeorm_1 = require("@nestjs/typeorm");
let HearingTypesModule = class HearingTypesModule {
};
HearingTypesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([hearing_type_entity_1.HearingType])],
        controllers: [hearing_types_controller_1.HearingTypesController],
        providers: [hearing_types_service_1.HearingTypesService]
    })
], HearingTypesModule);
exports.HearingTypesModule = HearingTypesModule;
//# sourceMappingURL=hearing-types.module.js.map