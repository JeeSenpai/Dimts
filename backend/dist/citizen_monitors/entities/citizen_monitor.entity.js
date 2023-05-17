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
exports.CitizenMonitor = void 0;
const case_entity_1 = require("../../cases/entities/case.entity");
const citizen_entity_1 = require("../../citizen/entities/citizen.entity");
const typeorm_1 = require("typeorm");
let CitizenMonitor = class CitizenMonitor {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CitizenMonitor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => citizen_entity_1.Citizen),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", Number)
], CitizenMonitor.prototype, "citizen", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => case_entity_1.Case),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", Number)
], CitizenMonitor.prototype, "case", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], CitizenMonitor.prototype, "relationship", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], CitizenMonitor.prototype, "is_verified", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        nullable: false,
        type: 'datetime',
        name: "created_at",
    }),
    __metadata("design:type", Date)
], CitizenMonitor.prototype, "datecreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'updated_at',
        type: "datetime"
    }),
    __metadata("design:type", Date)
], CitizenMonitor.prototype, "dateupdated", void 0);
CitizenMonitor = __decorate([
    (0, typeorm_1.Entity)()
], CitizenMonitor);
exports.CitizenMonitor = CitizenMonitor;
//# sourceMappingURL=citizen_monitor.entity.js.map