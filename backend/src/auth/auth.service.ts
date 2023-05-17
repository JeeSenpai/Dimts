import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from './utils/bcrypt';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService, private mailService: MailService) {}

      async login(userdata: any) {  
        const user = await this.usersService.findUserByEmail(userdata.email);
        if(user){
        const matched = comparePassword(userdata.password, user.password);
            if(matched){ 
                    const { password, ...rest } = user
                    const payload = { username: user.email, sub: user.id, };
                    
                    return {
                      access_token: this.jwtService.sign(payload),
                      user: rest,
                      isValidated: user.isValidated,
                    }; 
                    
            }
            else{
              return new HttpException('Password not match', HttpStatus.CONFLICT);
            }
       }
       else{
        return new HttpException('User Not Found', HttpStatus.NOT_FOUND);
       }
    }

      // async signUp() {
      //   // const cred = await this.usersService.create(user);
      //   // const token = Math.floor(100000 + Math.random() * 9000)
      //   // const emailUser = { email: cred.email, OTP: token, name: cred.userDetails.fname + " " + cred.userDetails.lname }

      //       this.mailService.sendUserConfirmation()
      //    }
      

      async otpVerified(id: number){
          const user = await this.usersService.findOne(id);
            if(user){
                this.usersService.updateOtp(id);
            }
      }
}
