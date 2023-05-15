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
exports.Case = void 0;
const case_type_entity_1 = require("../../case-type/entities/case-type.entity");
const typeorm_1 = require("typeorm");
let Case = class Case {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Case.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => case_type_entity_1.CaseType),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", Number)
], Case.prototype, "caseType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint'
    }),
    __metadata("design:type", Boolean)
], Case.prototype, "caseStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar"
    }),
    __metadata("design:type", String)
], Case.prototype, "case_no", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text"
    }),
    __metadata("design:type", String)
], Case.prototype, "case_title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text"
    }),
    __metadata("design:type", String)
], Case.prototype, "case_description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "date"
    }),
    __metadata("design:type", String)
], Case.prototype, "date_recieved", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int",
        default: 0
    }),
    __metadata("design:type", Number)
], Case.prototype, "reopenCount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        default: null
    }),
    __metadata("design:type", String)
], Case.prototype, "case_tag", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        default: null
    }),
    __metadata("design:type", String)
], Case.prototype, "case_checklist", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        default: null
    }),
    __metadata("design:type", Number)
], Case.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "float",
        default: null
    }),
    __metadata("design:type", Number)
], Case.prototype, "point_x", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "float",
        default: null
    }),
    __metadata("design:type", Number)
], Case.prototype, "point_y", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        nullable: false,
        type: 'datetime',
        name: "created_at",
    }),
    __metadata("design:type", Date)
], Case.prototype, "datecreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'updated_at',
        type: "datetime"
    }),
    __metadata("design:type", Date)
], Case.prototype, "dateupdated", void 0);
Case = __decorate([
    (0, typeorm_1.Entity)()
], Case);
exports.Case = Case;
//# sourceMappingURL=case.entity.js.map