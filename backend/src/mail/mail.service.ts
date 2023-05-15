import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation() {
    await this.mailerService.sendMail({
      to: 'frostbitz.gamingph@gmail.com',
      // from: '"Support Team" <support@example.com>', // override default from
       subject: 'DIMTS Notifications',
       template: 'confirmation', // `.hbs` extension is appended automatically
    });
  }
}