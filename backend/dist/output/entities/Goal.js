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
exports.Goal = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Goal = class Goal {
    idGoal;
    name;
    targetAmount;
    currentAmount;
    targetDate;
    status;
    userIdUser;
    userIdUser2;
};
exports.Goal = Goal;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "idGoal" }),
    __metadata("design:type", Number)
], Goal.prototype, "idGoal", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Goal.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "target_amount", nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Goal.prototype, "targetAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "current_amount", nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], Goal.prototype, "currentAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "target_date", nullable: true }),
    __metadata("design:type", String)
], Goal.prototype, "targetDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "status", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Goal.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "User_idUser" }),
    __metadata("design:type", Number)
], Goal.prototype, "userIdUser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.goals, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "User_idUser", referencedColumnName: "idUser" }]),
    __metadata("design:type", User_1.User)
], Goal.prototype, "userIdUser2", void 0);
exports.Goal = Goal = __decorate([
    (0, typeorm_1.Index)("fk_Goal_User1_idx", ["userIdUser"], {}),
    (0, typeorm_1.Entity)("Goal", { schema: "mydb" })
], Goal);
//# sourceMappingURL=Goal.js.map