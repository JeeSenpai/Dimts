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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const document_entity_1 = require("./entities/document.entity");
const notification_entity_1 = require("../notifications/entities/notification.entity");
let DocumentsService = class DocumentsService {
    constructor(documentRepository, notifRepository) {
        this.documentRepository = documentRepository;
        this.notifRepository = notifRepository;
    }
    async create(data) {
        const save = this.documentRepository.create({
            case: data.caseId,
            documentType: data.documentType,
            control_number: data.control_number,
            fromOffice: data.from_office,
            office: data.office,
            sender: data.sender,
            reciever: data.reciever,
            remarks: data.remarks,
            status: null,
        });
        return await this.documentRepository.save(save);
    }
    async findAllSendedDocs(id) {
        return await this.documentRepository.createQueryBuilder('document')
            .select([
            'document',
            'case',
            'document_type',
            'office'
        ])
            .leftJoin('document.case', 'case')
            .leftJoin('document.documentType', 'document_type')
            .leftJoin('document.office', 'office')
            .where('document.fromOffice =:id', { id })
            .orderBy('document.updated_at', 'DESC')
            .getMany();
    }
    async findAllReceivedDocs(id) {
        return await this.documentRepository.createQueryBuilder('document')
            .select([
            'document',
            'case',
            'document_type',
            'office'
        ])
            .leftJoin('document.case', 'case')
            .leftJoin('document.documentType', 'document_type')
            .leftJoin('document.fromOffice', 'office')
            .where('document.office =:id', { id })
            .andWhere('document.status IS NOT NULL')
            .orderBy('document.updated_at', 'DESC')
            .getMany();
    }
    async findOneByCaseId(id) {
        return await this.documentRepository.createQueryBuilder('document')
            .select([
            'document',
            'case',
            'document_type',
            'office'
        ])
            .leftJoin('document.case', 'case')
            .leftJoin('document.documentType', 'document_type')
            .leftJoin('document.office', 'office')
            .where('document.case =:id', { id })
            .getMany();
        ;
    }
    async update(data) {
        return await this.documentRepository.update(data.documentId, {
            case: data.caseId,
            documentType: data.documentType,
            control_number: data.control_number,
            fromOffice: data.from_office,
            office: data.office,
            sender: data.sender,
            reciever: data.reciever,
            remarks: data.remarks,
            status: null,
        });
    }
    async sendDocument(data) {
        const date = new Date();
        const saveNotif = this.notifRepository.create({
            notif_type: 1,
            document: data.id,
            is_clicked: false,
            notif_for: data.office.id
        });
        await this.notifRepository.save(saveNotif);
        return await this.documentRepository.update(data.id, { status: 0, sended_date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() });
    }
    async acknowledgeDocument(data) {
        const date = new Date();
        const saveNotif = this.notifRepository.create({
            notif_type: 2,
            document: data.id,
            is_clicked: false,
            notif_for: data.fromOffice.id
        });
        await this.notifRepository.save(saveNotif);
        return await this.documentRepository.update(data.id, { status: 1, acknowledge_date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() });
    }
    remove(id) {
        return `This action removes a #${id} document`;
    }
};
DocumentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(document_entity_1.Document)),
    __param(1, (0, typeorm_1.InjectRepository)(notification_entity_1.Notification)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DocumentsService);
exports.DocumentsService = DocumentsService;
//# sourceMappingURL=documents.service.js.map