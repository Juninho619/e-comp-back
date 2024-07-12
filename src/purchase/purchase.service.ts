import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePurchaseDto } from './dto/create.purchase.dto';

@Injectable()
export class PurchaseService {
    constructor(private prisma: PrismaService) {}

    async getAllPurchase(){
        return this.prisma.purchase.findMany({
            orderBy:{
                amount: 'desc'
            },
            select:{
                product_id: true,
                amount: true,
                quantity: true,
                user_id: true
            }
        })
    }

    async getPurchaseByUser(user: User){
        return this.prisma.purchase.findMany({
            where:{
                user_id: user.id
            },
            select:{
                product_id: true,
                amount: true,
                quantity: true,
                user_id: true
            }
        })

    }

    async createPurchase(dto: CreatePurchaseDto, user: User){
        return this.prisma.purchase.create({
            data:{...dto, user_id: user.id}
        })
    }

    async deletePurchase(id: string, user:User){
        const existingPurchase = await this.prisma.purchase.findUnique({
            where: {
              id: id,
            },
          });
          if (
            !existingPurchase ||
            !existingPurchase.id ||
            existingPurchase.user_id !== user.id
          ) {
            throw new BadRequestException('Nope');
          }
      
          return this.prisma.purchase.delete({
            where: {
              id: id,
            }
          });
    }
}