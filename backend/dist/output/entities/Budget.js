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
exports.Budget = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("./Category");
const User_1 = require("./User");
let Budget = class Budget {
    idBudget;
    amount;
    budgetDate;
    categoryIdCategory;
    userIdUser;
    categoryIdCategory2;
    userIdUser2;
};
exports.Budget = Budget;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "idBudget" }),
    __metadata("design:type", Number)
], Budget.prototype, "idBudget", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "amount", precision: 12 }),
    __metadata("design:type", Number)
], Budget.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "budget_date", nullable: true }),
    __metadata("design:type", String)
], Budget.prototype, "budgetDate", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Category_idCategory" }),
    __metadata("design:type", Number)
], Budget.prototype, "categoryIdCategory", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "User_idUser" }),
    __metadata("design:type", Number)
], Budget.prototype, "userIdUser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Category_1.Category, (category) => category.budgets, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([
        { name: "Category_idCategory", referencedColumnName: "idCategory" },
    ]),
    __metadata("design:type", Category_1.Category)
], Budget.prototype, "categoryIdCategory2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.budgets, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "User_idUser", referencedColumnName: "idUser" }]),
    __metadata("design:type", User_1.User)
], Budget.prototype, "userIdUser2", void 0);
exports.Budget = Budget = __decorate([
    (0, typeorm_1.Index)("fk_Budget_Category1_idx", ["categoryIdCategory"], {}),
    (0, typeorm_1.Index)("fk_Budget_User1_idx", ["userIdUser"], {}),
    (0, typeorm_1.Entity)("Budget", { schema: "mydb" })
], Budget);
//# sourceMappingURL=Budget.js.map