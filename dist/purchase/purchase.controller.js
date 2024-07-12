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
exports.PurchaseController = void 0;
const common_1 = require("@nestjs/common");
const purchase_service_1 = require("./purchase.service");
const create_purchase_dto_1 = require("./dto/create.purchase.dto");
const guards_1 = require("../auth/guards");
let PurchaseController = class PurchaseController {
    constructor(purchaseService) {
        this.purchaseService = purchaseService;
    }
    getAllPurchase() {
        return this.purchaseService.getAllPurchase();
    }
    getPurchaseByUser(user) {
        return this.purchaseService.getPurchaseByUser(user);
    }
    createPurchase(dto, product, user) {
        return this.purchaseService.createPurchase(dto, user, product);
    }
    deletePurchase(id, user) {
        return this.purchaseService.deletePurchase(id, user);
    }
};
exports.PurchaseController = PurchaseController;
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PurchaseController.prototype, "getAllPurchase", null);
__decorate([
    (0, common_1.Get)('/purchasebyuser'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PurchaseController.prototype, "getPurchaseByUser", null);
__decorate([
    (0, common_1.Post)('/buy'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_purchase_dto_1.CreatePurchaseDto, Object, Object]),
    __metadata("design:returntype", void 0)
], PurchaseController.prototype, "createPurchase", null);
__decorate([
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PurchaseController.prototype, "deletePurchase", null);
exports.PurchaseController = PurchaseController = __decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.Controller)('purchase'),
    __metadata("design:paramtypes", [purchase_service_1.PurchaseService])
], PurchaseController);
//# sourceMappingURL=purchase.controller.js.map