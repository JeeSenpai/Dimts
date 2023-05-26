import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserDocuments(data: any) {
    await this.mailerService.sendMail({
      to: data.email,
      // from: '"Support Team" <support@example.com>', // override default from
       subject: 'DIMTS Notifications',
       template: 'documents', // `.hbs` extension is appended automatically
       context: { // ✏️ filling curly brackets with content
        recieving_office: data.recieving_office,
        sending_office: data.sending_office,
        document_type: data.document_type,
        control_no: data.control_no,
        case_no: data.case_no,
        case_title: data.case_title,
        sender: data.sender,
        reciever: data.reciever,
        address: data.address,
      },
    });
  }

  async sendCourtHearing(data: any) {
    await this.mailerService.sendMail({
      to: data.email,
      // from: '"Support Team" <support@example.com>', // override default from
       subject: 'DIMTS Notifications',
       template: 'courthearing', // `.hbs` extension is appended automatically
       context: { // ✏️ filling curly brackets with content
        citizen_name: data.recieving_office,
        hearing_schedule: data.sending_office,
        hearing_type: data.document_type,
        case_no: data.case_no,
        case_title: data.case_title,
        raffled_court: data.sender,
        judge_assigned: data.reciever,
        start_time: data.address,
        end_time: data.end_time
      },
    });
  }
}