import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductDto } from './dto/update.product.dto';
import { CreateProductDto } from './dto/create.product.dto';
import { BuyProductDto } from './dto/buy.product.dto';
import { User } from '@prisma/client';
import { ForbiddenException } from '@nestjs/common';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {}

async getAllProducts(){
    return this.prisma.product.findMany({
        orderBy:{
            price: 'desc',
      }, select:{
        product_brand: true,
        product_model: true,
        price: true,
        stock: true,
        category: true
    }
})
}

async createProduct(dto: CreateProductDto){
  return this.prisma.product.create({
    data: { ...dto},
  });

}

async buyProduct(dto: BuyProductDto, user: User){
  const merch = await this.prisma.product.findFirst({
    where:{
      id: dto.productId,
    }
  })

  const buyer = await this.prisma.user.findFirst({
    where: {
      id: user.id,
    },
  });

  // user enough money
  if(buyer.money < merch.price){
    throw new ForbiddenException('User cannot buy this product')
  }

  await this.prisma.purchase.create({
    data:{
      quantity: dto.quantity,
      amount: dto.quantity,
      user_id: dto.userId,
      product_id: dto.productId
    },
  })

  // reduce stock
  await this.prisma.product.update({
    where:{
      id: dto.productId,
    },
    data:{

      }
  })

  // reduce user wallet
  await this.prisma.user.update({
    where:{id: user.id},
    data:{
      money: -1
    },
  })

  // return purchase overview

}

async updateProduct(id: string, dto: UpdateProductDto){
    const existingProduct = await this.prisma.product.findUnique({
        where: {
          id: id,
        },
      });

       if (!existingProduct || !existingProduct.id) {
         throw new ForbiddenException();
       }

      return this.prisma.product.update({
        where: { id: id },
        data: { ...dto },
        select: {
            product_brand: true,
            product_model: true,
            price: true,
            stock: true,
            category: true
        },
      });
    }

    async deleteProduct(id: string){
        const existingProduct = await this.prisma.user.findUnique({
            where: {
              id: id,
            },
          });
    
          //  if (!existingProduct || !existingProduct.id) {
          //    throw new ForbiddenException("u retard");
          // }

          return this.prisma.product.delete({
            where: {
              id: id,
            },
          });
  }
}




