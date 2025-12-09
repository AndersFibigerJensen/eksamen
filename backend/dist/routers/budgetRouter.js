"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_PAGE_SIZE = exports.START_PAGE = exports.DEFAULT_PAGE_SIZE = void 0;
const express_1 = require("express");
const BudgetService_1 = require("../services/BudgetService");
const categoryRouter_1 = require("./categoryRouter");
exports.DEFAULT_PAGE_SIZE = 20;
exports.START_PAGE = 1;
exports.MAX_PAGE_SIZE = 40;
const BudgetRouter = (0, express_1.Router)();
const buildBudgetsResponse = (Budgets, total, req) => {
    const page = req.query.page ? Number(req.query.page) : exports.START_PAGE;
    let size = req.query.pagesize
        ? Number(req.query.pagesize) : exports.DEFAULT_PAGE_SIZE;
    if (size > categoryRouter_1.Max_Page_size) {
        size = categoryRouter_1.Max_Page_size;
    }
    const numericTotal = typeof total === "bigint" ? Number(total) : total;
    const toalPages = Math.ceil(numericTotal / size);
    return {
        count: numericTotal,
        next: page < toalPages ?
            `${process.env.Server_URL}/budgets?page=
        ${page + 1}&pagesize=${size}` : null,
        results: Budgets
    };
};
BudgetRouter.get("/", async (req, res) => {
    const { results, count } = await (0, BudgetService_1.GetBudgets)(req);
    const response = buildBudgetsResponse(results, count, req);
    res.json(response);
});
BudgetRouter.get("/:id", async (req, res) => {
    const budgetid = Number(req.params.id);
    try {
        const budget = await (0, BudgetService_1.GetBudget)(budgetid);
        if (budget) {
            res.send(budget);
        }
        else {
            res.status(404).send({ error: "budget not found" });
        }
    }
    catch (error) {
        res.status(500).send({ error: "failed to fetch budget" });
    }
});
BudgetRouter.delete("/:id", async (req, res) => {
    const budgetid = Number(req.params.id);
    try {
        await (0, BudgetService_1.deleteBudgetById)(budgetid);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).send({ error: "failed to delete budget" });
    }
});
BudgetRouter.post("/", async (req, res) => {
    const budgetData = req.body;
    try {
        const newBudget = await (0, BudgetService_1.createBudget)(budgetData);
        res.status(201).send(newBudget);
    }
    catch (error) {
        res.status(500).send({ error: "failed to create budget" });
    }
});
BudgetRouter.put("/:id", async (req, res) => {
    const budgetid = Number(req.params.id);
    const budgetData = req.body;
    try {
        const updatedBudget = await (0, BudgetService_1.updateBudget)(budgetid, budgetData);
        res.status(200).send(updatedBudget);
    }
    catch (error) {
        res.status(500).send({ error: "failed to update budget" });
    }
});
exports.default = BudgetRouter;
//# sourceMappingURL=budgetRouter.js.map