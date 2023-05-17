"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTagsModule = void 0;
const common_1 = require("@nestjs/common");
const case_tags_service_1 = require("./case-tags.service");
const case_tags_controller_1 = require("./case-tags.controller");
const typeorm_1 = require("@nestjs/typeorm");
const case_tag_entity_1 = require("./entities/case-tag.entity");
let CaseTagsModule = class CaseTagsModule {
};
CaseTagsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([case_tag_entity_1.CaseTag])],
        controllers: [case_tags_controller_1.CaseTagsController],
        providers: [case_tags_service_1.CaseTagsService]
    })
], CaseTagsModule);
exports.CaseTagsModule = CaseTagsModule;
//# sourceMappingURL=case-tags.module.js.map