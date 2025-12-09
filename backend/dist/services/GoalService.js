"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGoal = exports.createGoal = exports.deleteGoalById = exports.GetGoal = exports.GetGoals = void 0;
const data_source_1 = require("../data-source");
const Goal_1 = require("../output/entities/Goal");
const goalRouter_1 = require("../routers/goalRouter");
const categoryRouter_1 = require("../routers/categoryRouter");
const GoalRepository = data_source_1.AppDataSource.getRepository(Goal_1.Goal);
const addGoalFilter = (queryBuilder, UserId) => {
    if (UserId) {
        queryBuilder.andWhere((qb) => {
            const subQuery = qb
                .subQuery()
                .select("Goal.idGoal")
                .from(Goal_1.Goal, "Goal")
                .leftJoin("Goal.userIdUser2", "User")
                .where("Goal.userIdUser2= :UserId")
                .getQuery();
            return "Goal.idGoal in " + subQuery;
        })
            .setParameter("UserId", UserId);
    }
};
const sortorder = (QueryBuilder, sortorder) => {
    if (!sortorder)
        QueryBuilder.orderBy("Goal.idGoal", "ASC");
    if (sortorder == "low")
        QueryBuilder.orderBy("Goal.idGoal", "DESC");
};
const buildGoalQuery = (req) => {
    const goalId = req.query.userId ? Number(req.query.userId) : undefined;
    const querybuilder = GoalRepository.createQueryBuilder("Goal")
        .leftJoinAndSelect("Goal.userIdUser2", "user");
    addGoalFilter(querybuilder, goalId);
    sortorder(querybuilder, req.query.sortorder);
    return querybuilder;
};
const GetGoals = async (req) => {
    const page = req.query.page ? Number(req.query.page) : goalRouter_1.START_PAGE;
    let pagesize = req.query.pagesize ? Number(req.query.pagesize) : goalRouter_1.DEFAULT_PAGE_SIZE;
    if (pagesize > goalRouter_1.MAX_PAGE_SIZE) {
        pagesize = categoryRouter_1.Max_Page_size;
    }
    const querybuilder = await buildGoalQuery(req);
    try {
        querybuilder.skip((page - 1) * pagesize).take(pagesize);
        const [goals, totalcount] = await querybuilder.getManyAndCount();
        return {
            count: totalcount,
            next: totalcount > page * pagesize ? `?page=${page + 1}&pagesize=${pagesize}` : null,
            results: goals.map((goal) => ({
                ...goal,
                userIdUser2: goal.userIdUser2
            })),
        };
    }
    catch (error) {
    }
};
exports.GetGoals = GetGoals;
const GetGoal = async (Goalid) => {
    try {
        const Goal = await GoalRepository.findOne({
            where: { idGoal: Number(Goalid) },
            relations: ["userIdUser2"]
        });
        return {
            ...Goal,
            useridUser2: Goal.userIdUser2
        };
    }
    catch (error) {
        throw new Error(`Goal with ID ${Goalid} not found`);
    }
};
exports.GetGoal = GetGoal;
const deleteGoalById = async (GoalId) => {
    try {
        await GoalRepository.delete(GoalId);
    }
    catch (error) {
        throw new Error(`Failed to delete game with ID ${GoalId}.`);
    }
};
exports.deleteGoalById = deleteGoalById;
const createGoal = async (GoalData) => {
    const Goal = GoalRepository.create(GoalData);
    return await GoalRepository.save(Goal);
};
exports.createGoal = createGoal;
const updateGoal = async (GoalId, GoalData) => {
    await GoalRepository.update(GoalId, GoalData);
    const updatedGoal = await GoalRepository.findOneBy({ idGoal: GoalId });
    if (!updatedGoal) { }
    return updatedGoal;
};
exports.updateGoal = updateGoal;
//# sourceMappingURL=GoalService.js.map