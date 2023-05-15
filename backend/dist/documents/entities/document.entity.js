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
exports.Document = void 0;
const case_entity_1 = require("../../cases/entities/case.entity");
const document_type_entity_1 = require("../../document-type/entities/document-type.entity");
const office_entity_1 = require("../../offices/entities/office.entity");
const typeorm_1 = require("typeorm");
let Document = class Document {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Document.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => case_entity_1.Case),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", Number)
], Document.prototype, "case", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => document_type_entity_1.DocumentType),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", Number)
], Document.prototype, "documentType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => office_entity_1.Office),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", Number)
], Document.prototype, "office", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => office_entity_1.Office),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", Number)
], Document.prototype, "fromOffice", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true
    }),
    __metadata("design:type", String)
], Document.prototype, "control_number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Document.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Document.prototype, "reciever", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Document.prototype, "remarks", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true
    }),
    __metadata("design:type", Number)
], Document.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", String)
], Document.prototype, "sended_date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", String)
], Document.prototype, "acknowledge_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        nullable: false,
        type: 'datetime',
        name: "created_at",
    }),
    __metadata("design:type", Date)
], Document.prototype, "datecreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'updated_at',
        type: "datetime"
    }),
    __metadata("design:type", Date)
], Document.prototype, "dateupdated", void 0);
Document = __decorate([
    (0, typeorm_1.Entity)()
], Document);
exports.Document = Document;
//# sourceMappingURL=document.entity.js.map