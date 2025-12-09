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
exports.Transaktion = void 0;
const typeorm_1 = require("typeorm");
const Account_1 = require("./Account");
const Category_1 = require("./Category");
let Transaktion = class Transaktion {
    idTransaktion;
    amount;
    description;
    date;
    type;
    categoryIdCategory;
    accountIdAccount;
    accountIdAccount2;
    categoryIdCategory2;
};
exports.Transaktion = Transaktion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "idTransaktion" }),
    __metadata("design:type", Number)
], Transaktion.prototype, "idTransaktion", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "amount", precision: 12 }),
    __metadata("design:type", Number)
], Transaktion.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "description", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Transaktion.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "date", nullable: true }),
    __metadata("design:type", String)
], Transaktion.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "type", nullable: true, enum: ["income", "expends"] }),
    __metadata("design:type", String)
], Transaktion.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Category_idCategory" }),
    __metadata("design:type", Number)
], Transaktion.prototype, "categoryIdCategory", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Account_idAccount" }),
    __metadata("design:type", Number)
], Transaktion.prototype, "accountIdAccount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Account_1.Account, (account) => account.transaktions, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([
        { name: "Account_idAccount", referencedColumnName: "idAccount" },
    ]),
    __metadata("design:type", Account_1.Account)
], Transaktion.prototype, "accountIdAccount2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Category_1.Category, (category) => category.transaktions, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([
        { name: "Category_idCategory", referencedColumnName: "idCategory" },
    ]),
    __metadata("design:type", Category_1.Category)
], Transaktion.prototype, "categoryIdCategory2", void 0);
exports.Transaktion = Transaktion = __decorate([
    (0, typeorm_1.Index)("fk_Transaktion_Category1_idx", ["categoryIdCategory"], {}),
    (0, typeorm_1.Index)("fk_Transaktion_Account1_idx", ["accountIdAccount"], {}),
    (0, typeorm_1.Entity)("Transaktion", { schema: "mydb" })
], Transaktion);
//# sourceMappingURL=Transaktion.js.map