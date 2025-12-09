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
exports.budgetController = void 0;
const tsoa_1 = require("tsoa");
const GoalService_1 = require("../services/GoalService");
let budgetController = class budgetController extends tsoa_1.Controller {
    async getGoals(req) {
        try {
            const response = await (0, GoalService_1.GetGoals)(req);
            return response.results;
        }
        catch (e) {
            this.setStatus(500);
            throw new Error("Failed to fetch budgets");
        }
    }
    async getGoal(id) {
        try {
            const response = await (0, GoalService_1.GetGoal)(id);
            return response;
        }
        catch {
        }
    }
    async PostGoal(goaldata) {
        try {
            const response = await (0, GoalService_1.createGoal)(goaldata);
            return response;
        }
        catch {
        }
    }
    ;
    async PutBudget(id, GoalData) {
        try {
            const response = await (0, GoalService_1.updateGoal)(id, GoalData);
            return response;
        }
        catch {
        }
    }
    async Delete(id) {
        try {
            const response = await (0, GoalService_1.deleteGoalById)(id);
            return response;
        }
        catch {
        }
    }
};
exports.budgetController = budgetController;
__decorate([
    (0, tsoa_1.Get)("/"),
    (0, tsoa_1.Response)(200),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], budgetController.prototype, "getGoals", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    (0, tsoa_1.Response)(200),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], budgetController.prototype, "getGoal", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    (0, tsoa_1.Response)(201),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], budgetController.prototype, "PostGoal", null);
__decorate([
    (0, tsoa_1.Put)("{id}"),
    (0, tsoa_1.Response)(201),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], budgetController.prototype, "PutBudget", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    (0, tsoa_1.Response)(200),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], budgetController.prototype, "Delete", null);
exports.budgetController = budgetController = __decorate([
    (0, tsoa_1.Route)("goal"),
    (0, tsoa_1.Tags)()
], budgetController);
//# sourceMappingURL=goalcontroller.js.map