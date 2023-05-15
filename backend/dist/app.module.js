"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_entity_1 = require("./users/entities/user.entity");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const mail_module_1 = require("./mail/mail.module");
const config_1 = require("@nestjs/config");
const user_detail_entity_1 = require("./users/entities/user_detail.entity");
const user_type_module_1 = require("./user_type/user_type.module");
const user_type_entity_1 = require("./user_type/entities/user_type.entity");
const cases_module_1 = require("./cases/cases.module");
const case_type_module_1 = require("./case-type/case-type.module");
const case_status_module_1 = require("./case-status/case-status.module");
const raffled_court_module_1 = require("./raffled-court/raffled-court.module");
const judges_module_1 = require("./judges/judges.module");
const case_decision_module_1 = require("./case-decision/case-decision.module");
const document_type_module_1 = require("./document-type/document-type.module");
const case_entity_1 = require("./cases/entities/case.entity");
const case_type_entity_1 = require("./case-type/entities/case-type.entity");
const case_decision_entity_1 = require("./case-decision/entities/case-decision.entity");
const case_status_entity_1 = require("./case-status/entities/case-status.entity");
const raffled_court_entity_1 = require("./raffled-court/entities/raffled-court.entity");
const judge_entity_1 = require("./judges/entities/judge.entity");
const document_type_entity_1 = require("./document-type/entities/document-type.entity");
const court_hearings_module_1 = require("./court-hearings/court-hearings.module");
const court_hearing_entity_1 = require("./court-hearings/entities/court-hearing.entity");
const hearing_types_module_1 = require("./hearing-types/hearing-types.module");
const hearing_type_entity_1 = require("./hearing-types/entities/hearing-type.entity");
const proceedings_module_1 = require("./proceedings/proceedings.module");
const proceeding_entity_1 = require("./proceedings/entities/proceeding.entity");
const documents_module_1 = require("./documents/documents.module");
const document_entity_1 = require("./documents/entities/document.entity");
const offices_module_1 = require("./offices/offices.module");
const office_entity_1 = require("./offices/entities/office.entity");
const custodies_module_1 = require("./custodies/custodies.module");
const custody_entity_1 = require("./custodies/entities/custody.entity");
const notifications_module_1 = require("./notifications/notifications.module");
const notification_entity_1 = require("./notifications/entities/notification.entity");
const case_tags_module_1 = require("./case-tags/case-tags.module");
const case_tag_entity_1 = require("./case-tags/entities/case-tag.entity");
const case_checklist_module_1 = require("./case-checklist/case-checklist.module");
const case_checklist_entity_1 = require("./case-checklist/entities/case-checklist.entity");
const citizen_module_1 = require("./citizen/citizen.module");
const citizen_monitors_module_1 = require("./citizen_monitors/citizen_monitors.module");
const citizen_entity_1 = require("./citizen/entities/citizen.entity");
const citizen_monitor_entity_1 = require("./citizen_monitors/entities/citizen_monitor.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, config_1.ConfigModule.forRoot(), typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DATABASE_HOST,
                port: parseInt(process.env.DATABASE_PORT),
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                entities: [user_entity_1.User, user_detail_entity_1.UserDetails, user_type_entity_1.UserType, case_entity_1.Case, case_type_entity_1.CaseType, case_decision_entity_1.CaseDecision, case_status_entity_1.CaseStatus, raffled_court_entity_1.RaffledCourt, judge_entity_1.Judge, document_type_entity_1.DocumentType, court_hearing_entity_1.CourtHearing, hearing_type_entity_1.HearingType, proceeding_entity_1.Proceeding, document_entity_1.Document, office_entity_1.Office, custody_entity_1.Custody, notification_entity_1.Notification, case_tag_entity_1.CaseTag, case_checklist_entity_1.CaseChecklist, citizen_entity_1.Citizen, citizen_monitor_entity_1.CitizenMonitor],
                synchronize: true,
            }),
            auth_module_1.AuthModule, mail_module_1.MailModule, user_type_module_1.UserTypeModule, cases_module_1.CasesModule, case_type_module_1.CaseTypeModule, case_status_module_1.CaseStatusModule, raffled_court_module_1.RaffledCourtModule, judges_module_1.JudgesModule, case_decision_module_1.CaseDecisionModule, document_type_module_1.DocumentTypeModule, court_hearings_module_1.CourtHearingsModule, hearing_types_module_1.HearingTypesModule, proceedings_module_1.ProceedingsModule, documents_module_1.DocumentsModule, offices_module_1.OfficesModule, custodies_module_1.CustodiesModule, notifications_module_1.NotificationsModule, case_tags_module_1.CaseTagsModule, case_checklist_module_1.CaseChecklistModule, citizen_module_1.CitizenModule, citizen_monitors_module_1.CitizenMonitorsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map