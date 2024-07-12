import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto } from './dto/auth.signup.dto';
import { SigninDto } from './dto/auth.signin.dto';
import { EmailService } from 'src/email/email.service';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    private emailService;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService, emailService: EmailService);
    signup(dto: SignupDto): Promise<{
        access_token: string;
    }>;
    signin(dto: SigninDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: string): Promise<{
        access_token: string;
    }>;
}
