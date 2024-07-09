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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const argon = require("argon2");
const prisma_service_1 = require("../prisma/prisma.service");
const email_service_1 = require("../email/email.service");
let AuthService = class AuthService {
    constructor(prisma, jwt, config, emailService) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
        this.emailService = emailService;
    }
    async signup(dto) {
        const exisingUser = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (exisingUser) {
            throw new common_1.ForbiddenException('Email already taken');
        }
        const hash = await argon.hash(dto.password);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                password: hash,
                username: dto.username,
                is_active: true,
                money: 2000
            },
        });
        const activationToken = await argon.hash(`${new Date()} + ${user.email}`);
        await this.emailService.sendUserConfirmation(user, activationToken);
        return this.signToken(user.id);
    }
    async signin(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!user) {
            throw new common_1.ForbiddenException('Invalid crendentials');
        }
        const isValidPassword = await argon.verify(user.password, dto.password);
        if (!isValidPassword) {
            throw new common_1.ForbiddenException('Invalid crendentials');
        }
        return this.signToken(user.id);
    }
    async signToken(userId) {
        const payload = {
            sub: userId,
        };
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15d',
            secret: secret,
        });
        return {
            access_token: token,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService,
        email_service_1.EmailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map