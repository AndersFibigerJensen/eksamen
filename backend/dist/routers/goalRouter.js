"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_PAGE_SIZE = exports.START_PAGE = exports.DEFAULT_PAGE_SIZE = void 0;
const express_1 = require("express");
const Goal_1 = require("../output/entities/Goal");
const data_source_1 = require("../data-source");
const GoalService_1 = require("../services/GoalService");
exports.DEFAULT_PAGE_SIZE = 20;
exports.START_PAGE = 1;
exports.MAX_PAGE_SIZE = 40;
const GoalRouter = (0, express_1.Router)();
const buildGoalResponse = (goals, total, req) => {
    const page = req.query.page ? Number(req.query.page) : exports.START_PAGE;
    let pagesize = req.query.pagesize
        ? Number(req.query.pagesize) : exports.DEFAULT_PAGE_SIZE;
    if (pagesize > exports.MAX_PAGE_SIZE) {
        pagesize = exports.MAX_PAGE_SIZE;
    }
    const totalPages = Math.ceil(total / pagesize);
    return {
        count: total,
        next: page < totalPages ?
            `${process.env.Server_URL}/transactions?page
        =${page + 1}&pagesize=${pagesize}` : null,
        results: goals
    };
};
const GoalRepository = data_source_1.AppDataSource.getRepository(Goal_1.Goal);
GoalRouter.get("/", async (req, res) => {
    const { results, count } = await (0, GoalService_1.GetGoals)(req);
    const response = await buildGoalResponse(results, count, req);
    res.json(response);
});
GoalRouter.get("/:id", async (req, res) => {
    const Goalid = req.params.id;
    try {
        const Goal = await (0, GoalService_1.GetGoal)(Goalid);
        if (Goal) {
            res.send(Goal);
        }
        else {
            res.status(404).send({ error: "transaktion not found" });
        }
    }
    catch (error) {
        res.status(500).send({ error: "failed to fetch transaktion" });
    }
});
GoalRouter.delete("/:id", async (req, res) => {
    const goalid = Number(req.params.id);
    try {
        await (0, GoalService_1.deleteGoalById)(goalid);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).send({ error: "failed to delete goal" });
    }
});
GoalRouter.post("/", async (req, res) => {
    const goalData = req.body;
    try {
        const newGoal = GoalRepository.create(goalData);
        const savedGoal = await GoalRepository.save(newGoal);
        res.status(201).send(savedGoal);
    }
    catch (error) {
        res.status(500).send({ error: "failed to create goal" });
    }
});
GoalRouter.put("/:id", async (req, res) => {
    const goalid = Number(req.params.id);
    const goalData = req.body;
    try {
        await GoalRepository.update(goalid, goalData);
        const updatedGoal = await GoalRepository.findOneBy({ idGoal: goalid });
        if (!updatedGoal) { }
        res.status(200).send(updatedGoal);
    }
    catch (error) {
        res.status(500).send({ error: "failed to update goal" });
    }
});
exports.default = GoalRouter;
//# sourceMappingURL=goalRouter.js.map