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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt_1 = require("../auth/utils/bcrypt");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const user_detail_entity_1 = require("./entities/user_detail.entity");
let UsersService = class UsersService {
    constructor(userRepository, userDetailsRepository) {
        this.userRepository = userRepository;
        this.userDetailsRepository = userDetailsRepository;
    }
    async create(data) {
        const password = (0, bcrypt_1.encodePassword)('dimts123');
        const newUserDetails = this.userDetailsRepository.create({
            fname: data.fname,
            mname: data.mname,
            lname: data.lname,
            userType: data.usertype,
            office: data.office
        });
        const user = await this.userDetailsRepository.save(newUserDetails);
        const newUserSec = this.userRepository.create({
            email: data.username,
            password: password,
            isValidated: true,
            otpVerified: true,
            userDetails: user,
            status: data.status
        });
        const newUser = await this.userRepository.save(newUserSec);
        return newUser;
    }
    async update(data) {
        await this.userDetailsRepository.update(data.accountDetailsId, {
            fname: data.fname,
            mname: data.mname,
            lname: data.lname,
            userType: data.usertype,
            office: data.office
        });
        return await this.userRepository.update(data.accountId, {
            email: data.username,
            status: data.status
        });
    }
    findAll() {
        return this.userRepository.createQueryBuilder('user')
            .select([
            'user',
            'user_details',
            'user_type',
            'office'
        ])
            .leftJoin('user.userDetails', 'user_details')
            .leftJoin('user_details.userType', 'user_type')
            .leftJoin('user_details.office', 'office')
            .getMany();
    }
    findUserByEmail(email) {
        return this.userRepository.createQueryBuilder('user')
            .select([
            'user',
            'user_details',
            'user_type',
            'office'
        ])
            .leftJoin('user.userDetails', 'user_details')
            .leftJoin('user_details.userType', 'user_type')
            .leftJoin('user_details.office', 'office')
            .where('user.email = :email ', { email })
            .getOne();
    }
    findOne(id) {
        return this.userRepository.createQueryBuilder('user')
            .select([
            'user',
            'user_details',
            'user_type',
            'office'
        ])
            .leftJoin('user.userDetails', 'user_details')
            .leftJoin('user_details.userType', 'user_type')
            .leftJoin('user_details.office', 'office')
            .where('user.id = :id ', { id })
            .getOne();
    }
    async updateOtp(id) {
        const updatedOtp = await this.userRepository.update(id, { otpVerified: true });
        if (updatedOtp) {
            return new common_1.HttpException('OTP Verified Succesfully', common_1.HttpStatus.CREATED);
        }
    }
    async resetPassword(id) {
        const password = (0, bcrypt_1.encodePassword)('dimts123');
        return await this.userRepository.update(id, { password: password });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(user_detail_entity_1.UserDetails)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map