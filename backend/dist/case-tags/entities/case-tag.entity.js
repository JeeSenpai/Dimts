"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTag = void 0;
const case_type_entity_1 = require("../../case-type/entities/case-type.entity");
const typeorm_1 = require("typeorm");
let CaseTag = class CaseTag {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CaseTag.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar'
    }),
    __metadata("design:type", String)
], CaseTag.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => case_type_entity_1.CaseType),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", Number)
], CaseTag.prototype, "caseType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: true
    }),
    __metadata("design:type", Boolean)
], CaseTag.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        nullable: false,
        type: 'datetime',
        name: "created_at",
    }),
    __metadata("design:type", Date)
], CaseTag.prototype, "datecreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'updated_at',
        type: "datetime"
    }),
    __metadata("design:type", Date)
], CaseTag.prototype, "dateupdated", void 0);
CaseTag = __decorate([
    (0, typeorm_1.Entity)()
], CaseTag);
exports.CaseTag = CaseTag;
//# sourceMappingURL=case-tag.entity.js.map