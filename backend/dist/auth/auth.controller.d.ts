import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<import("@nestjs/common").HttpException | {
        access_token: string;
        user: any;
        isValidated: any;
    }>;
    verifyOtp(req: any): Promise<void>;
}
