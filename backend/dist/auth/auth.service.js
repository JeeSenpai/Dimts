"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("./utils/bcrypt");
const mail_service_1 = require("../mail/mail.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService, mailService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async login(userdata) {
        const user = await this.usersService.findUserByEmail(userdata.email);
        if (user) {
            const matched = (0, bcrypt_1.comparePassword)(userdata.password, user.password);
            if (matched) {
                const { password } = user, rest = __rest(user, ["password"]);
                const payload = { username: user.email, sub: user.id, };
                return {
                    access_token: this.jwtService.sign(payload),
                    user: rest,
                    isValidated: user.isValidated,
                };
            }
            else {
                return new common_1.HttpException('Password not match', common_1.HttpStatus.CONFLICT);
            }
        }
        else {
            return new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async signUp() {
        this.mailService.sendUserConfirmation();
    }
    async otpVerified(id) {
        const user = await this.usersService.findOne(id);
        if (user) {
            this.usersService.updateOtp(id);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService, mail_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map