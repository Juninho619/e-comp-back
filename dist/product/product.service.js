"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const common_2 = require("@nestjs/common");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllProducts() {
        return this.prisma.product.findMany({
            orderBy: {
                price: 'desc',
            }, select: {
                product_brand: true,
                product_model: true,
                price: true,
                stock: true,
                category: true
            }
        });
    }
    async getProductById(id) {
        return this.prisma.product.findUnique({
            where: {
                id: id
            }, select: {
                product_brand: true,
                product_model: true,
                price: true,
                stock: true,
                category: true
            }
        });
    }
    async createProduct(dto) {
        return this.prisma.product.create({
            data: { ...dto },
        });
    }
    async buyProduct(dto, user) {
        const merch = await this.prisma.product.findFirst({
            where: {
                id: dto.productId,
            }
        });
        const buyer = await this.prisma.user.findFirst({
            where: {
                id: user.id,
            },
        });
        if (buyer.money < merch.price) {
            throw new common_2.ForbiddenException('User cannot buy this product');
        }
        await this.prisma.purchase.create({
            data: {
                quantity: dto.quantity,
                amount: dto.quantity,
                user_id: dto.userId,
                product_id: dto.productId
            },
        });
        await this.prisma.product.update({
            where: {
                id: dto.productId,
            },
            data: {
                stock: -dto.quantity
            }
        });
        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                money: -dto.amount
            },
        });
    }
    async updateProduct(id, dto) {
        const existingProduct = await this.prisma.product.findUnique({
            where: {
                id: id,
            },
        });
        if (!existingProduct || !existingProduct.id) {
            throw new common_2.ForbiddenException();
        }
        return this.prisma.product.update({
            where: { id: id },
            data: { ...dto },
            select: {
                product_brand: true,
                product_model: true,
                price: true,
                stock: true,
                category: true
            },
        });
    }
    async deleteProduct(id) {
        const existingProduct = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        return this.prisma.product.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map