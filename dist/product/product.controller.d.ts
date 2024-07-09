import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update.product.dto';
import { CreateProductDto } from './dto/create.product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProducts(): Promise<{
        product_brand: string;
        product_model: string;
        price: number;
        stock: number;
        category_id: string;
    }[]>;
    createProduct(dto: CreateProductDto): Promise<{
        id: string;
        product_brand: string;
        product_model: string;
        price: number;
        stock: number;
        category_id: string;
    }>;
    updateProduct(dto: UpdateProductDto, id: string): Promise<{
        product_brand: string;
        product_model: string;
        price: number;
        stock: number;
        category_id: string;
    }>;
    deleteProduct(id: string): Promise<{
        id: string;
        product_brand: string;
        product_model: string;
        price: number;
        stock: number;
        category_id: string;
    }>;
}
