import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update.product.dto';
import { CreateProductDto } from './dto/create.product.dto';
import { JwtGuard } from 'src/auth/guards';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/all')
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @UseGuards(JwtGuard)
  @Post('/create')
  createProduct(@Body() dto: CreateProductDto){
    return this.productService.createProduct(dto)
  }

  @UseGuards(JwtGuard)
  @Get('/productbyid/:id')
  getProductById(@Param('id') id: string){
    return this.productService.getProductById(id)
  }

  @UseGuards(JwtGuard)
  @Post('/buy')
  buyProduct(@Body() dto: CreateProductDto){
    return this.productService.createProduct(dto)
  }

  @UseGuards(JwtGuard)
  @Patch('/update/:id')
  updateProduct(@Body() dto: UpdateProductDto, @Param('id') id: string) {
    return this.productService.updateProduct(id, dto);
  }

  @UseGuards(JwtGuard)
  @HttpCode(204)
  @Delete('/delete/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
