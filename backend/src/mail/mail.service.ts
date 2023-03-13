import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: any) {
    await this.mailerService.sendMail({
      to: user.email,
      // from: '"Support Team" <support@example.com>', // override default from
       subject: 'Welcome to AUMS! Confirm your Email',
       template: 'confirmation', // `.hbs` extension is appended automatically
       context: { // ✏️ filling curly brackets with content
          name: user.name,
          OTP: user.OTP
      },
    });
  }
}