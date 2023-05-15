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
exports.RaffledCourtController = void 0;
const common_1 = require("@nestjs/common");
const raffled_court_service_1 = require("./raffled-court.service");
let RaffledCourtController = class RaffledCourtController {
    constructor(raffledCourtService) {
        this.raffledCourtService = raffledCourtService;
    }
    create(data) {
        return this.raffledCourtService.create(data);
    }
    findAll() {
        return this.raffledCourtService.findAll();
    }
    findAllActive() {
        return this.raffledCourtService.findAllActive();
    }
    findOne(id) {
        return this.raffledCourtService.findOne(+id);
    }
    update(data) {
        return this.raffledCourtService.update(data);
    }
    remove(id) {
        return this.raffledCourtService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RaffledCourtController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RaffledCourtController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RaffledCourtController.prototype, "findAllActive", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RaffledCourtController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RaffledCourtController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RaffledCourtController.prototype, "remove", null);
RaffledCourtController = __decorate([
    (0, common_1.Controller)('raffled-court'),
    __metadata("design:paramtypes", [raffled_court_service_1.RaffledCourtService])
], RaffledCourtController);
exports.RaffledCourtController = RaffledCourtController;
//# sourceMappingURL=raffled-court.controller.js.map