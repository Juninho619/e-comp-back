import { PurchaseService } from './purchase.service';
import { User } from '@prisma/client';
import { CreatePurchaseDto } from './dto/create.purchase.dto';
export declare class PurchaseController {
    private readonly purchaseService;
    constructor(purchaseService: PurchaseService);
    getAllPurchases(): Promise<{
        product_id: string;
        amount: number;
        quantity: number;
        user_id: string;
    }[]>;
    getPurchaseByUser(user: User): Promise<{
        product_id: string;
        amount: number;
        quantity: number;
        user_id: string;
    }[]>;
    createPurchase(dto: CreatePurchaseDto, user: User): Promise<{
        id: string;
        product_id: string;
        amount: number;
        quantity: number;
        user_id: string;
    }>;
    deletePurchase(id: string, user: User): Promise<{
        id: string;
        product_id: string;
        amount: number;
        quantity: number;
        user_id: string;
    }>;
}
