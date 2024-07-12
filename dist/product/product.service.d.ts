import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductDto } from './dto/update.product.dto';
import { CreateProductDto } from './dto/create.product.dto';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllProducts(): Promise<{
        product_brand: string;
        product_model: string;
        price: number;
        stock: number;
        category: string;
    }[]>;
    createProduct(dto: CreateProductDto): Promise<{
        id: string;
        product_brand: string;
        product_model: string;
        price: number;
        stock: number;
        category: string;
    }>;
    updateProduct(id: string, dto: UpdateProductDto): Promise<{
        product_brand: string;
        product_model: string;
        price: number;
        stock: number;
        category: string;
    }>;
    deleteProduct(id: string): Promise<{
        id: string;
        product_brand: string;
        product_model: string;
        price: number;
        stock: number;
        category: string;
    }>;
}
