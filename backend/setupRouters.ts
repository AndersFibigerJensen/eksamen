import express from "express";
import GoalRouter from "./routers/goalRouter";
import TransaktionRouter from "./routers/transaktionRouter";
import CategoryRouter from "./routers/categoryRouter";
import UserRouter from "./routers/userRouter";
import BudgetRouter from "./routers/budgetRouter";
import AccountRouter from "./routers/accountRouter";
import authRouter from "./routers/authRouter";

const setupRouters = (app: express.Application) =>  {
    app.use("/goals",GoalRouter);
    app.use("/transactions",TransaktionRouter);
    app.use("/categories",CategoryRouter);
    app.use("/users",UserRouter);
    app.use("/budgets",BudgetRouter);
    app.use("/accounts",AccountRouter);
    app.use("/authRouter",authRouter)
};

export default setupRouters;