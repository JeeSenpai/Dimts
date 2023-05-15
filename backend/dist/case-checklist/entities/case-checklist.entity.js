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
exports.CaseChecklist = void 0;
const case_tag_entity_1 = require("../../case-tags/entities/case-tag.entity");
const typeorm_1 = require("typeorm");
let CaseChecklist = class CaseChecklist {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CaseChecklist.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], CaseChecklist.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => case_tag_entity_1.CaseTag),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", Number)
], CaseChecklist.prototype, "caseTag", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: true
    }),
    __metadata("design:type", Boolean)
], CaseChecklist.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CaseChecklist.prototype, "minPenalty", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CaseChecklist.prototype, "maxPenalty", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        nullable: false,
        type: 'datetime',
        name: "created_at",
    }),
    __metadata("design:type", Date)
], CaseChecklist.prototype, "datecreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'updated_at',
        type: "datetime"
    }),
    __metadata("design:type", Date)
], CaseChecklist.prototype, "dateupdated", void 0);
CaseChecklist = __decorate([
    (0, typeorm_1.Entity)()
], CaseChecklist);
exports.CaseChecklist = CaseChecklist;
//# sourceMappingURL=case-checklist.entity.js.map