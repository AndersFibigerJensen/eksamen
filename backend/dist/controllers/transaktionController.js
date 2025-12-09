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
exports.transaktionController = void 0;
const tsoa_1 = require("tsoa");
const TransaktionService_1 = require("../services/TransaktionService");
let transaktionController = class transaktionController extends tsoa_1.Controller {
    async getTransaktions(req) {
        try {
            const response = await (0, TransaktionService_1.GetTransaktions)(req);
            this.setStatus(200);
            return response.results;
        }
        catch (e) {
            this.setStatus(500);
            throw new Error("Failed to fetch budgets");
        }
    }
    async getTransaktion(id) {
        try {
            const response = await (0, TransaktionService_1.GetTransaktion)(id);
            this.setStatus(200);
            return response;
        }
        catch {
        }
    }
    async PostBudget(transaktiondata) {
        try {
            const response = await (0, TransaktionService_1.createTransaktion)(transaktiondata);
            this.setStatus(200);
            return response;
        }
        catch {
        }
    }
    ;
    async PutBudget(id, transaktiondata) {
        try {
            const response = await (0, TransaktionService_1.updateTransaktion)(id, transaktiondata);
            this.setStatus(200);
            return response;
        }
        catch {
        }
    }
    async Delete(id) {
        try {
            const response = await (0, TransaktionService_1.deleteTransaktionById)(id);
            return response;
        }
        catch {
        }
    }
};
exports.transaktionController = transaktionController;
__decorate([
    (0, tsoa_1.Get)("/"),
    (0, tsoa_1.SuccessResponse)(200),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], transaktionController.prototype, "getTransaktions", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    (0, tsoa_1.SuccessResponse)(200),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], transaktionController.prototype, "getTransaktion", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    (0, tsoa_1.SuccessResponse)(201),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], transaktionController.prototype, "PostBudget", null);
__decorate([
    (0, tsoa_1.Put)("{id}"),
    (0, tsoa_1.SuccessResponse)(200),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], transaktionController.prototype, "PutBudget", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    (0, tsoa_1.SuccessResponse)(200),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], transaktionController.prototype, "Delete", null);
exports.transaktionController = transaktionController = __decorate([
    (0, tsoa_1.Route)("transaktion"),
    (0, tsoa_1.Tags)()
], transaktionController);
//# sourceMappingURL=transaktionController.js.map