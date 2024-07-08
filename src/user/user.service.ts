import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update.user.dto';


@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}
    async getAllUsers() {
        return this.prisma.user.findMany({
        orderBy:{
            username: 'desc',
      }, select:{
        id: true,
        username: true,
        email: true, 
        created_at: true,
        money: true,
        is_active: true,
        role: true,
        Purchase:{
            select:{
                id: true,
                product_id: true,
                amount: true,
                quantity: true,
            }
        }
      }
    })
}
async updateUser(id: string, dto: UpdateUserDto){
    const existingUser = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
  
      if (!existingUser || !existingUser.id) {
        throw new ForbiddenException("u retard");
      }
  
      return this.prisma.user.update({
        where: { id: id },
        data: { ...dto },
        select: {
          username: true,
          email: true,
          id: true,
        },
      });
    }
    async deleteUser(id: string) {
        const existingUser = await this.prisma.user.findUnique({
          where: {
            id: id,
          },
        });
        if (!existingUser || !existingUser.id) {
          throw new ForbiddenException("U twat");
        }
    
        return this.prisma.user.delete({
          where: {
            id: id,
          },
        });
      }
    }