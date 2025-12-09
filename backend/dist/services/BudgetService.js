"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBudget = exports.createBudget = exports.deleteBudgetById = exports.GetBudget = exports.GetBudgets = void 0;
const data_source_1 = require("../data-source");
const Budget_1 = require("../output/entities/Budget");
const budgetRouter_1 = require("../routers/budgetRouter");
const categoryRouter_1 = require("../routers/categoryRouter");
const BudgetRepository = data_source_1.AppDataSource.getRepository(Budget_1.Budget);
const addCategoryFilter = (queryBuilder, categoryId) => {
    if (categoryId) {
        queryBuilder.andWhere((qb) => {
            const subQuery = qb
                .subQuery()
                .select("Budget.idBudget")
                .from(Budget_1.Budget, "Budget")
                .leftJoin("Budget.categoryIdCategory2", "category")
                //make sure to add the right ids in when the time comes
                .where("category.idCategory = :categoryid")
                .getQuery();
            return "Budget.idBudget in " + subQuery;
        })
            .setParameter("categoryid", categoryId);
    }
};
const addAccountFilter = (queryBuilder, userId) => {
    if (userId) {
        queryBuilder.andWhere((qb) => {
            const subQuery = qb
                .subQuery()
                .select("Budget.idBudget")
                .from(Budget_1.Budget, "Budget")
                .leftJoin("Budget.userIdUser2", "User")
                .where("Budget.userIdUser2= :userId")
                .getQuery();
            return "Budget.idBudget in " + subQuery;
        })
            .setParameter("userId", userId);
    }
};
//needs to be fixed
const addDateFilter = (queryBuilder, DateLow, DateHigh) => {
    if (DateLow) {
        queryBuilder.andWhere("Budget.budget_date >= :DateLow", { DateLow });
    }
    if (DateHigh) {
        queryBuilder.andWhere("Budget.budget_date <= :DateHigh", { DateHigh });
    }
};
const sortorder = (QueryBuilder, sortorder) => {
    if (!sortorder)
        QueryBuilder.orderBy("Budget.idBudget", "ASC");
    if (sortorder == "low")
        QueryBuilder.orderBy("Budget.idBudget", "DESC");
};
const buildBudgetQuery = (req) => {
    const categoryId = req.query.CategoryId ? Number(req.query.CategoryId) : undefined;
    const userId = req.header.userId ? Number(req.query.userId) : undefined;
    const TransaktionDateHigh = req.query.TransaktionDateHigh ? String(req.query.TransaktionDateHigh) : undefined;
    const TransaktionDateLow = req.query.TransaktionDateLow ? String(req.query.TransaktionDateLow) : undefined;
    const queryBuilder = BudgetRepository
        .createQueryBuilder("Budget")
        .leftJoinAndSelect("Budget.categoryIdCategory2", "category")
        .leftJoinAndSelect("Budget.userIdUser2", "user");
    sortorder(queryBuilder, req.query.sortorder ? String(req.query.sortorder) : undefined);
    addCategoryFilter(queryBuilder, categoryId);
    addAccountFilter(queryBuilder, userId);
    addDateFilter(queryBuilder, TransaktionDateHigh, TransaktionDateLow);
    return queryBuilder;
};
const GetBudgets = async (req) => {
    const page = req.query.page ? Number(req.query.page) : budgetRouter_1.START_PAGE;
    let pagesize = req.query.pagesize ? Number(req.query.pagesize) : budgetRouter_1.DEFAULT_PAGE_SIZE;
    if (pagesize > categoryRouter_1.Max_Page_size) {
        pagesize = categoryRouter_1.Max_Page_size;
    }
    const querybuilder = buildBudgetQuery(req);
    try {
        querybuilder.skip((page - 1) * pagesize).take(pagesize);
        const [budgets, totalcount] = await querybuilder.getManyAndCount();
        return {
            count: totalcount,
            next: totalcount > page * pagesize ? `?page=${page + 1}&pagesize=${pagesize}` : null,
            results: budgets.map((budget) => ({
                ...budget,
                userIdUser2: budget.userIdUser2,
                categoryIdCategory2: budget.categoryIdCategory2,
            })),
        };
    }
    catch (error) {
        throw new Error("Failed to get Transaktions.");
    }
};
exports.GetBudgets = GetBudgets;
const GetBudget = async (Budgetid) => {
    try {
        const Budget = await BudgetRepository.findOne({
            where: { idBudget: Number(Budgetid) },
            relations: ["userIdUser2", "categoryIdCategory2"]
        });
        return {
            ...Budget,
            userIdUser2: Budget.userIdUser2,
            categoryIdCategory2: Budget.categoryIdCategory2
        };
    }
    catch (error) {
        console.log(error);
        throw new Error(`Transaktion with ID ${Budgetid} not found`);
    }
};
exports.GetBudget = GetBudget;
const deleteBudgetById = async (BudgetId) => {
    try {
        await BudgetRepository.delete(BudgetId);
    }
    catch (error) {
        throw new Error(`Failed to delete game with ID ${BudgetId}.`);
    }
};
exports.deleteBudgetById = deleteBudgetById;
const createBudget = async (budgetData) => {
    const budget = BudgetRepository.create(budgetData);
    return await BudgetRepository.save(budget);
};
exports.createBudget = createBudget;
const updateBudget = async (budgetId, budgetData) => {
    await BudgetRepository.update(budgetId, budgetData);
    const updatedBudget = await BudgetRepository.findOneBy({ idBudget: budgetId });
    if (!updatedBudget) { }
    return updatedBudget;
};
exports.updateBudget = updateBudget;
//# sourceMappingURL=BudgetService.js.map