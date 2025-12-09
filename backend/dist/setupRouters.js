"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const goalRouter_1 = __importDefault(require("./routers/goalRouter"));
const transaktionRouter_1 = __importDefault(require("./routers/transaktionRouter"));
const categoryRouter_1 = __importDefault(require("./routers/categoryRouter"));
const userRouter_1 = __importDefault(require("./routers/userRouter"));
const budgetRouter_1 = __importDefault(require("./routers/budgetRouter"));
const accountRouter_1 = __importDefault(require("./routers/accountRouter"));
const authRouter_1 = __importDefault(require("./routers/authRouter"));
const setupRouters = (app) => {
    app.use("/goals", goalRouter_1.default);
    app.use("/transactions", transaktionRouter_1.default);
    app.use("/categories", categoryRouter_1.default);
    app.use("/users", userRouter_1.default);
    app.use("/budgets", budgetRouter_1.default);
    app.use("/accounts", accountRouter_1.default);
    app.use("/authRouter", authRouter_1.default);
};
exports.default = setupRouters;
//# sourceMappingURL=setupRouters.js.map