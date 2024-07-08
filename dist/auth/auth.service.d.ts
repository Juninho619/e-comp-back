import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto } from './dto/auth.signup.dto';
import { SigninDto } from './dto/auth.signin.dto';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
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
