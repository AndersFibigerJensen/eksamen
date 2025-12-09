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
exports.Account = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Transaktion_1 = require("./Transaktion");
let Account = class Account {
    idAccount;
    name;
    saldo;
    userIdUser;
    userIdUser2;
    transaktions;
    User;
};
exports.Account = Account;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "idAccount" }),
    __metadata("design:type", Number)
], Account.prototype, "idAccount", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", length: 45 }),
    __metadata("design:type", String)
], Account.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "saldo", precision: 12 }),
    __metadata("design:type", Number)
], Account.prototype, "saldo", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "User_idUser" }),
    __metadata("design:type", Number)
], Account.prototype, "userIdUser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.accounts, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "User_idUser", referencedColumnName: "idUser" }]),
    __metadata("design:type", User_1.User)
], Account.prototype, "userIdUser2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Transaktion_1.Transaktion, (transaktion) => transaktion.accountIdAccount2),
    __metadata("design:type", Array)
], Account.prototype, "transaktions", void 0);
exports.Account = Account = __decorate([
    (0, typeorm_1.Index)("fk_Account_User1_idx", ["userIdUser"], {}),
    (0, typeorm_1.Entity)("Account", { schema: "mydb" })
], Account);
//# sourceMappingURL=Account.js.map