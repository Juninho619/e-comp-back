import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto } from './dto/auth.signup.dto';
import { SigninDto } from './dto/auth.signin.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
      ) {}
      async signup(dto: SignupDto) {
        const exisingUser = await this.prisma.user.findUnique({
          where: {
            email: dto.email,
          },
        });
        if (exisingUser) {
          throw new ForbiddenException('Email already taken');
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
        return this.signToken(user.id);
    }

    async signin(dto: SigninDto) {
      const user = await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });
      if (!user) {
        throw new ForbiddenException('Invalid crendentials');
      }
  
      const isValidPassword = await argon.verify(user.password, dto.password);
      if (!isValidPassword) {
        throw new ForbiddenException('Invalid crendentials');
      }
      return this.signToken(user.id);
    }


  async signToken(userId: string): Promise<{ access_token: string }> {
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
}
    
