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
exports.CourtHearing = void 0;
const case_entity_1 = require("../../cases/entities/case.entity");
const hearing_type_entity_1 = require("../../hearing-types/entities/hearing-type.entity");
const judge_entity_1 = require("../../judges/entities/judge.entity");
const raffled_court_entity_1 = require("../../raffled-court/entities/raffled-court.entity");
const typeorm_1 = require("typeorm");
let CourtHearing = class CourtHearing {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourtHearing.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => case_entity_1.Case),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", Number)
], CourtHearing.prototype, "case", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => hearing_type_entity_1.HearingType),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", Number)
], CourtHearing.prototype, "hearingType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => raffled_court_entity_1.RaffledCourt),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", Number)
], CourtHearing.prototype, "raffledCourt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => judge_entity_1.Judge),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", Number)
], CourtHearing.prototype, "judgeAssigned", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "date"
    }),
    __metadata("design:type", String)
], CourtHearing.prototype, "hearing_schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "time"
    }),
    __metadata("design:type", String)
], CourtHearing.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "time"
    }),
    __metadata("design:type", String)
], CourtHearing.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text"
    }),
    __metadata("design:type", String)
], CourtHearing.prototype, "remarks", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int'
    }),
    __metadata("design:type", Number)
], CourtHearing.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        nullable: false,
        type: 'datetime',
        name: "created_at",
    }),
    __metadata("design:type", Date)
], CourtHearing.prototype, "datecreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'updated_at',
        type: "datetime"
    }),
    __metadata("design:type", Date)
], CourtHearing.prototype, "dateupdated", void 0);
CourtHearing = __decorate([
    (0, typeorm_1.Entity)()
], CourtHearing);
exports.CourtHearing = CourtHearing;
//# sourceMappingURL=court-hearing.entity.js.map