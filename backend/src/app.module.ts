import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { UserDetails } from './users/entities/user_detail.entity';
import { UserTypeModule } from './user_type/user_type.module';
import { UserType } from './user_type/entities/user_type.entity';
import { CasesModule } from './cases/cases.module';
import { CaseTypeModule } from './case-type/case-type.module';
import { CaseStatusModule } from './case-status/case-status.module';
import { RaffledCourtModule } from './raffled-court/raffled-court.module';
import { JudgesModule } from './judges/judges.module';
import { CaseDecisionModule } from './case-decision/case-decision.module';
import { DocumentTypeModule } from './document-type/document-type.module';
import { Case } from './cases/entities/case.entity';
import { CaseType } from './case-type/entities/case-type.entity';
import { CaseDecision } from './case-decision/entities/case-decision.entity';
import { CaseStatus } from './case-status/entities/case-status.entity';
import { RaffledCourt } from './raffled-court/entities/raffled-court.entity';
import { Judge } from './judges/entities/judge.entity';
import { DocumentType } from './document-type/entities/document-type.entity';
import { CourtHearingsModule } from './court-hearings/court-hearings.module';
import { CourtHearing } from './court-hearings/entities/court-hearing.entity';
import { HearingTypesModule } from './hearing-types/hearing-types.module';
import { HearingType } from './hearing-types/entities/hearing-type.entity';
import { ProceedingsModule } from './proceedings/proceedings.module';
import { Proceeding } from './proceedings/entities/proceeding.entity';
import { DocumentsModule } from './documents/documents.module';
import { Document } from './documents/entities/document.entity';
import { OfficesModule } from './offices/offices.module';
import { Office } from './offices/entities/office.entity';
import { CustodiesModule } from './custodies/custodies.module';
import { Custody } from './custodies/entities/custody.entity';
import { NotificationsModule } from './notifications/notifications.module';
import { Notification } from './notifications/entities/notification.entity';
import { CaseTagsModule } from './case-tags/case-tags.module';
import { CaseTag } from './case-tags/entities/case-tag.entity';
import { CaseChecklistModule } from './case-checklist/case-checklist.module';
import { CaseChecklist } from './case-checklist/entities/case-checklist.entity';

@Module({
  imports: [UsersModule,ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [User, UserDetails, UserType, Case, CaseType, CaseDecision, CaseStatus, RaffledCourt, Judge, DocumentType, CourtHearing, HearingType, Proceeding, Document, Office, Custody, Notification, CaseTag, CaseChecklist],
    synchronize: true,
  }),
   AuthModule, MailModule, UserTypeModule, CasesModule, CaseTypeModule, CaseStatusModule, RaffledCourtModule, JudgesModule, CaseDecisionModule, DocumentTypeModule, CourtHearingsModule, HearingTypesModule, ProceedingsModule, DocumentsModule, OfficesModule, CustodiesModule, NotificationsModule, CaseTagsModule, CaseChecklistModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
