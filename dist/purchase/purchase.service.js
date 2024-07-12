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
exports.PurchaseService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PurchaseService = class PurchaseService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllPurchase() {
        return this.prisma.purchase.findMany({
            orderBy: {
                amount: 'desc'
            },
            select: {
                product_id: true,
                amount: true,
                quantity: true,
                user_id: true
            }
        });
    }
    async getPurchaseByUser(user) {
        return this.prisma.purchase.findMany({
            where: {
                user_id: user.id
            },
            select: {
                product_id: true,
                amount: true,
                quantity: true,
                user_id: true
            }
        });
    }
    async createPurchase(dto, user, product) {
        return this.prisma.purchase.create({
            data: {
                amount: dto.amount,
                quantity: dto.quantity,
                user_id: user.id,
                product_id: product.id
            },
        });
    }
    async deletePurchase(id, user) {
        const existingPurchase = await this.prisma.purchase.findUnique({
            where: {
                id: id,
            },
        });
        if (!existingPurchase ||
            !existingPurchase.id ||
            existingPurchase.user_id !== user.id) {
            throw new common_1.BadRequestException('Nope');
        }
        return this.prisma.purchase.delete({
            where: {
                id: id,
            }
        });
    }
};
exports.PurchaseService = PurchaseService;
exports.PurchaseService = PurchaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PurchaseService);
//# sourceMappingURL=purchase.service.js.map