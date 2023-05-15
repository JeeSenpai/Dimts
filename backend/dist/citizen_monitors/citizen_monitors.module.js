"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitizenMonitorsModule = void 0;
const common_1 = require("@nestjs/common");
const citizen_monitors_service_1 = require("./citizen_monitors.service");
const citizen_monitors_controller_1 = require("./citizen_monitors.controller");
const typeorm_1 = require("@nestjs/typeorm");
const citizen_monitor_entity_1 = require("./entities/citizen_monitor.entity");
let CitizenMonitorsModule = class CitizenMonitorsModule {
};
CitizenMonitorsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([citizen_monitor_entity_1.CitizenMonitor])],
        controllers: [citizen_monitors_controller_1.CitizenMonitorsController],
        providers: [citizen_monitors_service_1.CitizenMonitorsService]
    })
], CitizenMonitorsModule);
exports.CitizenMonitorsModule = CitizenMonitorsModule;
//# sourceMappingURL=citizen_monitors.module.js.map