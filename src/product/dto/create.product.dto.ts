import { isString } from "class-validator"

export class CreateProductDto{
 
    product_brand: string


    product_model: string

    price: GLfloat

    stock: number
    category: string
}