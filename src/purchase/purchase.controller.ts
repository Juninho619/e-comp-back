import { Body, Controller, Delete, Get, HttpCode, Param, Post, UseGuards } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { User } from '@prisma/client';
import { CreatePurchaseDto } from './dto/create.purchase.dto';
import { JwtGuard } from 'src/auth/guards';

@UseGuards(JwtGuard)
@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get('/all')
  getAllPurchase(){
    return this.purchaseService.getAllPurchase()
  }

  @Get('/purchasebyuser')
  getPurchaseByUser(@Param() user: User){
    return this.purchaseService.getPurchaseByUser(user)
  }

  @Post('/buy')
  createPurchase(@Body() dto: CreatePurchaseDto, @Param()user: User){
    return this.purchaseService.createPurchase(dto, user)
  }

  @HttpCode(204)
  @Delete('/delete/:id')
  deletePurchase(@Param('id') id: string, user: User) {
    return this.purchaseService.deletePurchase(id, user);
  }
}
