import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductDto } from './dto/update.product.dto';
import { CreateProductDto } from './dto/create.product.dto';
import { BuyProductDto } from './dto/buy.product.dto';
import { User } from '@prisma/client';
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
    getProductById(id: string): Promise<{
        product_brand: string;
        product_model: string;
        price: number;
        stock: number;
        category: string;
    }>;
    createProduct(dto: CreateProductDto): Promise<{
        id: string;
        product_brand: string;
        product_model: string;
        price: number;
        stock: number;
        category: string;
    }>;
    buyProduct(dto: BuyProductDto, user: User): Promise<void>;
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
