import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
  }),
 
   PrismaModule,
 
   AuthModule,
 
   ProductModule],
})
export class AppModule {}
