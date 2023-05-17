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
exports.CitizenMonitorsController = void 0;
const common_1 = require("@nestjs/common");
const citizen_monitors_service_1 = require("./citizen_monitors.service");
const create_citizen_monitor_dto_1 = require("./dto/create-citizen_monitor.dto");
const update_citizen_monitor_dto_1 = require("./dto/update-citizen_monitor.dto");
let CitizenMonitorsController = class CitizenMonitorsController {
    constructor(citizenMonitorsService) {
        this.citizenMonitorsService = citizenMonitorsService;
    }
    create(createCitizenMonitorDto) {
        return this.citizenMonitorsService.create(createCitizenMonitorDto);
    }
    findAll() {
        return this.citizenMonitorsService.findAll();
    }
    findAllMonitorByCitizen(id) {
        return this.citizenMonitorsService.findAllMonitorByCitizen(id);
    }
    findOne(id) {
        return this.citizenMonitorsService.findOne(+id);
    }
    update(id, updateCitizenMonitorDto) {
        return this.citizenMonitorsService.update(+id, updateCitizenMonitorDto);
    }
    verifyCitizen(id) {
        return this.citizenMonitorsService.verifyCitizen(id);
    }
    unverifyCitizen(id) {
        return this.citizenMonitorsService.unverifyCitizen(id);
    }
    remove(id) {
        return this.citizenMonitorsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_citizen_monitor_dto_1.CreateCitizenMonitorDto]),
    __metadata("design:returntype", void 0)
], CitizenMonitorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CitizenMonitorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findAllMonitorByCitizen/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CitizenMonitorsController.prototype, "findAllMonitorByCitizen", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CitizenMonitorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_citizen_monitor_dto_1.UpdateCitizenMonitorDto]),
    __metadata("design:returntype", void 0)
], CitizenMonitorsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('verifyCitizen/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CitizenMonitorsController.prototype, "verifyCitizen", null);
__decorate([
    (0, common_1.Patch)('unverifyCitizen/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CitizenMonitorsController.prototype, "unverifyCitizen", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CitizenMonitorsController.prototype, "remove", null);
CitizenMonitorsController = __decorate([
    (0, common_1.Controller)('citizen-monitors'),
    __metadata("design:paramtypes", [citizen_monitors_service_1.CitizenMonitorsService])
], CitizenMonitorsController);
exports.CitizenMonitorsController = CitizenMonitorsController;
//# sourceMappingURL=citizen_monitors.controller.js.map