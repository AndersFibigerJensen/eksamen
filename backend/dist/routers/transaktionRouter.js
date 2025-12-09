"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_PAGE_SIZE = exports.START_PAGE = exports.DEFAULT_PAGE_SIZE = void 0;
const express_1 = require("express");
const TransaktionService_1 = require("../services/TransaktionService");
const categoryRouter_1 = require("./categoryRouter");
exports.DEFAULT_PAGE_SIZE = 20;
exports.START_PAGE = 1;
exports.MAX_PAGE_SIZE = 40;
const TransaktionRouter = (0, express_1.Router)();
const buildTransaktionResponse = (transactions, total, req) => {
    const page = req.query.page ? Number(req.query.page) : exports.START_PAGE;
    let pagesize = req.query.pagesize
        ? Number(req.query.pagesize) : exports.DEFAULT_PAGE_SIZE;
    if (pagesize > exports.MAX_PAGE_SIZE) {
        pagesize = categoryRouter_1.Max_Page_size;
    }
    const totalPages = Math.ceil(total / pagesize);
    return {
        count: total,
        next: page < totalPages ?
            `${process.env.Server_URL}/transactions?page
        =${page + 1}&pagesize=${pagesize}` : null,
        results: transactions
    };
};
TransaktionRouter.get("/", async (req, res) => {
    const { results, count } = await (0, TransaktionService_1.GetTransaktions)(req);
    try {
        const response = await buildTransaktionResponse(results, count, req);
        res.json(response);
        res.status(200).send();
    }
    catch (error) {
        res.status(500).send({ error: "failed to fetch transaktion" });
    }
});
TransaktionRouter.get("/:id", async (req, res) => {
    const Transaktionid = req.params.id;
    try {
        const transaktion = await (0, TransaktionService_1.GetTransaktion)(Transaktionid);
        if (transaktion) {
            res.send(transaktion);
        }
        else {
            res.status(404).send({ error: "transaktion not found" });
        }
    }
    catch (error) {
        res.status(500).send({ error: "failed to fetch transaktion" });
    }
});
TransaktionRouter.delete("/:id", async (req, res) => {
    const transaktionid = Number(req.params.id);
    try {
        await (0, TransaktionService_1.deleteTransaktionById)(transaktionid);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).send({ error: "failed to delete transaktion" });
    }
});
TransaktionRouter.post("/", async (req, res) => {
    const transaktionData = req.body;
    try {
        const newTransaktion = await (0, TransaktionService_1.createTransaktion)(transaktionData);
        res.status(201).send(newTransaktion);
    }
    catch (error) {
        res.status(500).send({ error: "failed to create transaktion" });
    }
});
TransaktionRouter.put("/:id", async (req, res) => {
    const transaktionid = Number(req.params.id);
    const transaktionData = req.body;
    try {
        const updatedTransaktion = await (0, TransaktionService_1.updateTransaktion)(transaktionid, transaktionData);
        res.status(200).send(updatedTransaktion);
    }
    catch (error) {
        res.status(500).send({ error: "failed to update transaktion" });
    }
});
exports.default = TransaktionRouter;
//# sourceMappingURL=transaktionRouter.js.map