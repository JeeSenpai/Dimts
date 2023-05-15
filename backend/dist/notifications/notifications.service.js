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
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const document_entity_1 = require("../documents/entities/document.entity");
const notification_entity_1 = require("./entities/notification.entity");
const office_entity_1 = require("../offices/entities/office.entity");
let NotificationsService = class NotificationsService {
    constructor(documentRepository, notifRepository) {
        this.documentRepository = documentRepository;
        this.notifRepository = notifRepository;
    }
    create(createNotificationDto) {
        return 'This action adds a new notification';
    }
    async findAllNotficationForOffice(officeId) {
        return await this.notifRepository.createQueryBuilder('notification')
            .select([
            'notification',
            'document',
            'office',
            'case'
        ])
            .leftJoin('notification.document', 'document')
            .leftJoin('document.office', 'office')
            .leftJoinAndMapOne('document.fromOffice', office_entity_1.Office, 'from_office', 'from_office.id = document.fromOffice')
            .leftJoin('document.case', 'case')
            .where('notification.notif_for =:officeId', { officeId })
            .orderBy('notification.created_at', 'DESC')
            .getMany();
    }
    async updateIsClicked(id) {
        return await this.notifRepository.update(id, {
            is_clicked: true
        });
    }
    findAll() {
        return `This action returns all notifications`;
    }
    findOne(id) {
        return `This action returns a #${id} notification`;
    }
    update(id, updateNotificationDto) {
        return `This action updates a #${id} notification`;
    }
    remove(id) {
        return `This action removes a #${id} notification`;
    }
};
NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(document_entity_1.Document)),
    __param(1, (0, typeorm_1.InjectRepository)(notification_entity_1.Notification)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], NotificationsService);
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=notifications.service.js.map