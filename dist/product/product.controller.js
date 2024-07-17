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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const update_product_dto_1 = require("./dto/update.product.dto");
const create_product_dto_1 = require("./dto/create.product.dto");
const guards_1 = require("../auth/guards");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    getAllProducts() {
        return this.productService.getAllProducts();
    }
    createProduct(dto) {
        return this.productService.createProduct(dto);
    }
    getProductById(id) {
        return this.productService.getProductById(id);
    }
    buyProduct(dto) {
        return this.productService.createProduct(dto);
    }
    updateProduct(dto, id) {
        return this.productService.updateProduct(id, dto);
    }
    deleteProduct(id) {
        return this.productService.deleteProduct(id);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.Get)(('/productbyid/:id')),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getProductById", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.Post)('/buy'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "buyProduct", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_dto_1.UpdateProductDto, String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "deleteProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map