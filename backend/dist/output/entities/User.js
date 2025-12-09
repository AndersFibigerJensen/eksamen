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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Account_1 = require("./Account");
const Budget_1 = require("./Budget");
const Goal_1 = require("./Goal");
let User = class User {
    idUser;
    username;
    password;
    email;
    createdAt;
    accounts;
    budgets;
    goals;
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "idUser" }),
    __metadata("design:type", Number)
], User.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "username", length: 45 }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "password", length: 45 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "email", length: 45 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Account_1.Account, (account) => account.userIdUser2),
    __metadata("design:type", Array)
], User.prototype, "accounts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Budget_1.Budget, (budget) => budget.userIdUser2),
    __metadata("design:type", Array)
], User.prototype, "budgets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Goal_1.Goal, (goal) => goal.userIdUser2),
    __metadata("design:type", Array)
], User.prototype, "goals", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)("User", { schema: "mydb" })
], User);
//# sourceMappingURL=User.js.map