"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Max_Page_size = exports.START_PAGE = exports.DEFAULT_PAGE_SIZE = void 0;
const express_1 = require("express");
const Category_1 = require("../output/entities/Category");
const data_source_1 = require("../data-source");
const CategoryService_1 = require("../services/CategoryService");
exports.DEFAULT_PAGE_SIZE = 100;
exports.START_PAGE = 1;
exports.Max_Page_size = 100;
const buildCategoriesResponse = (Categories, total, req) => {
    const page = req.query.page ? Number(req.query.page) : exports.START_PAGE;
    let size = req.query.pagesize
        ? Number(req.query.pagesize) : exports.DEFAULT_PAGE_SIZE;
    if (size > exports.Max_Page_size) {
        size = exports.Max_Page_size;
    }
    const numericTotal = typeof total === "bigint" ? Number(total) : total;
    const toalPages = Math.ceil(numericTotal / size);
    return {
        count: numericTotal,
        next: page < toalPages ?
            `${process.env.Server_URL}/Categories?page=
        ${page + 1}&pagesize=${size}` : null,
        results: Categories
    };
};
const CategoryRouter = (0, express_1.Router)();
const CategoryRepository = data_source_1.AppDataSource.getRepository(Category_1.Category);
CategoryRouter.get("/", async (req, res) => {
    const { results, count } = await (0, CategoryService_1.GetCategories)(req);
    const Response = buildCategoriesResponse(results, count, req);
    res.send(Response);
});
CategoryRouter.get("/:id", async (req, res) => {
    const categoryid = req.params.id;
    try {
        const category = await (0, CategoryService_1.GetCategory)(Number(categoryid));
        if (category) {
            res.send(category);
        }
        else {
            res.status(404).send({ error: "category not found" });
        }
    }
    catch (error) {
        res.status(500).send({ error: "failed to fetch category" });
    }
});
CategoryRouter.delete("/:id", async (req, res) => {
    const categoryId = Number(req.params.id);
    try {
        await (0, CategoryService_1.deleteCategory)(categoryId);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).send({ error: " failed to delete category" });
    }
});
CategoryRouter.post("/", async (req, res) => {
    const categoryData = req.body;
    try {
        const newCategory = CategoryRepository.create(categoryData);
        const savedCategory = await CategoryRepository.save(newCategory);
        res.status(201).send(savedCategory);
    }
    catch (error) {
        res.status(500).send({ error: "failed to create category" });
    }
});
CategoryRouter.put("/:id", async (req, res) => {
    const categoryid = Number(req.params.id);
    const categoryData = req.body;
    try {
        const updatedCategory = await (0, CategoryService_1.updateCategory)(categoryid, categoryData);
        res.status(200).send(updatedCategory);
    }
    catch (error) {
        res.status(500).send({ error: "failed to update category" });
    }
});
exports.default = CategoryRouter;
//# sourceMappingURL=categoryRouter.js.map