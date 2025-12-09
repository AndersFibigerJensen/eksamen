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
exports.Category = void 0;
const typeorm_1 = require("typeorm");
const Budget_1 = require("./Budget");
const Transaktion_1 = require("./Transaktion");
let Category = class Category {
    idCategory;
    name;
    type;
    budgets;
    transaktions;
};
exports.Category = Category;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "idCategory" }),
    __metadata("design:type", Number)
], Category.prototype, "idCategory", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", length: 45 }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "type", length: 45 }),
    __metadata("design:type", String)
], Category.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Budget_1.Budget, (budget) => budget.categoryIdCategory2),
    __metadata("design:type", Array)
], Category.prototype, "budgets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Transaktion_1.Transaktion, (transaktion) => transaktion.categoryIdCategory2),
    __metadata("design:type", Array)
], Category.prototype, "transaktions", void 0);
exports.Category = Category = __decorate([
    (0, typeorm_1.Entity)("Category", { schema: "mydb" })
], Category);
//# sourceMappingURL=Category.js.map