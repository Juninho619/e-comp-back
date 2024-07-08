import { Body, Controller, Delete, Get, HttpCode, Param, Patch } from '@nestjs/common';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update.product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/all')
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Patch('/update/:id')
  updateProduct(@Body() dto: UpdateProductDto, @Param('id') id: string) {
    return this.productService.updateProduct(id, dto);
  }

  @HttpCode(204)
  @Delete('/delete/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
