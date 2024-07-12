import { isPositive, IsUUID } from "class-validator";

export class BuyProductDto{
    @IsUUID()
    productId: string

    amount: number

    quantity: number
    
    @IsUUID()
    userId: string
}