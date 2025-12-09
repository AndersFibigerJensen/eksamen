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
exports.CategoryController = void 0;
const tsoa_1 = require("tsoa");
const CategoryService_1 = require("../services/CategoryService");
let CategoryController = class CategoryController extends tsoa_1.Controller {
    async getAccounts(req) {
        try {
            const response = await (0, CategoryService_1.GetCategories)(req);
            return response.results;
        }
        catch (e) {
            this.setStatus(500);
            throw new Error("Failed to fetch budgets");
        }
    }
    async getCategory(id) {
        try {
            const response = await (0, CategoryService_1.GetCategory)(id);
            return response;
        }
        catch {
        }
    }
    async PostCategory(categorydata) {
        try {
            const response = await (0, CategoryService_1.createCategory)(categorydata);
            return response;
        }
        catch {
        }
    }
    ;
    async PutCategory(id, categorydata) {
        try {
            const response = await (0, CategoryService_1.updateCategory)(id, categorydata);
            return response;
        }
        catch {
        }
    }
    async Delete(id) {
        try {
            const response = await (0, CategoryService_1.deleteCategory)(id);
            return response;
        }
        catch {
        }
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, tsoa_1.Get)("/"),
    (0, tsoa_1.Response)("200"),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAccounts", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    (0, tsoa_1.Response)(200),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategory", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    (0, tsoa_1.Response)(201),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "PostCategory", null);
__decorate([
    (0, tsoa_1.Put)("{id}"),
    (0, tsoa_1.Response)(200),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "PutCategory", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    (0, tsoa_1.Response)(200),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "Delete", null);
exports.CategoryController = CategoryController = __decorate([
    (0, tsoa_1.Route)("category"),
    (0, tsoa_1.Tags)()
], CategoryController);
//# sourceMappingURL=categorycontroller.js.map