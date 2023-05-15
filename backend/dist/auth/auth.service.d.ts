import { HttpException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private mailService;
    constructor(usersService: UsersService, jwtService: JwtService, mailService: MailService);
    login(userdata: any): Promise<HttpException | {
        access_token: string;
        user: any;
        isValidated: any;
    }>;
    signUp(): Promise<void>;
    otpVerified(id: number): Promise<void>;
}
