import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth Login')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('login')
    async login(@Request() req) {
      return this.authService.login(req.body);
    }

    @Post('signUp')
    async signUp(@Request() req) {
      return this.authService.signUp(req.body);
    }
    
    @Post('updateOtp')
    async verifyOtp(@Request() req){
      return this.authService.otpVerified(req.body.id)
    }
}
