import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductDto } from './dto/update.product.dto';
import { CreateProductDto } from './dto/create.product.dto';

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

async updateProduct(id: string, dto: UpdateProductDto){
    const existingProduct = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });

      if (!existingProduct || !existingProduct.id) {
        throw new ForbiddenException("u retard");
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
    
          if (!existingProduct || !existingProduct.id) {
            throw new ForbiddenException("u retard");
          }

          return this.prisma.product.delete({
            where: {
              id: id,
            },
          });
        }
      }




