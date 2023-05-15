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
exports.Citizen = void 0;
const typeorm_1 = require("typeorm");
let Citizen = class Citizen {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Citizen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], Citizen.prototype, "fname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        default: null
    }),
    __metadata("design:type", String)
], Citizen.prototype, "mname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], Citizen.prototype, "lname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], Citizen.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], Citizen.prototype, "contact_no", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], Citizen.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], Citizen.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], Citizen.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], Citizen.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        default: null
    }),
    __metadata("design:type", String)
], Citizen.prototype, "valid_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        nullable: false,
        type: 'datetime',
        name: "created_at",
    }),
    __metadata("design:type", Date)
], Citizen.prototype, "datecreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'updated_at',
        type: "datetime"
    }),
    __metadata("design:type", Date)
], Citizen.prototype, "dateupdated", void 0);
Citizen = __decorate([
    (0, typeorm_1.Entity)()
], Citizen);
exports.Citizen = Citizen;
//# sourceMappingURL=citizen.entity.js.map