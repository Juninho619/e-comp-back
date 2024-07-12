import { IsUUID } from "class-validator";

export class CreatePurchaseDto{

    @IsUUID()
    product_id: string

    @IsUUID()
    user_id: string

    amount: GLfloat

    quantity: number
}