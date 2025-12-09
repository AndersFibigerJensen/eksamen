"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategory = exports.createCategory = exports.deleteCategory = exports.GetCategory = exports.GetCategories = exports.sortorder = void 0;
const data_source_1 = require("../data-source");
const Category_1 = require("../output/entities/Category");
const categoryRouter_1 = require("../routers/categoryRouter");
const CategoryRepository = data_source_1.AppDataSource.getRepository(Category_1.Category);
const sortorder = (QueryBuilder, sortorder) => {
    if (!sortorder)
        QueryBuilder.orderBy("Category.idCategory", "ASC");
    if (sortorder == "low")
        QueryBuilder.orderBy("Category.idCategory", "DESC");
};
exports.sortorder = sortorder;
const buildCategoryQuery = (req) => {
    const sortorderParam = req.query.sortorder ? String(req.query.sortorder) : undefined;
    const querybuilder = CategoryRepository.createQueryBuilder("Category");
    (0, exports.sortorder)(querybuilder, sortorderParam);
    return querybuilder;
};
const GetCategories = async (req) => {
    const page = req.query.page
        ? Number(req.query.page) : categoryRouter_1.START_PAGE;
    let pagesize = req.query.pagesize ?
        Number(req.query.pagesize) : categoryRouter_1.DEFAULT_PAGE_SIZE;
    if (pagesize > categoryRouter_1.Max_Page_size) {
        pagesize = categoryRouter_1.Max_Page_size;
    }
    const querybuilder = buildCategoryQuery(req);
    try {
        querybuilder.skip((page - 1) * pagesize).take(pagesize);
        const [Categories, totalcount] = await querybuilder.getManyAndCount();
        return {
            count: typeof totalcount === 'bigint'
                ? Number(totalcount)
                : totalcount,
            results: Categories.map((Category) => ({
                ...Category,
                budgets: Category.budgets,
                transaktions: Category.transaktions,
            })),
        };
    }
    catch (error) {
        throw new Error("Failed to get Transaktions.");
    }
};
exports.GetCategories = GetCategories;
const GetCategory = async (Categoryid) => {
    try {
        const Category = await CategoryRepository.findOne({
            where: { idCategory: Number(Categoryid) },
            relations: ["userIdUser2"]
        });
        return {
            ...Category,
            transaktions: Category?.transaktions,
            budgets: Category?.budgets,
        };
    }
    catch (error) {
        throw new Error(`Transaktion with ID ${Categoryid} not found`);
    }
};
exports.GetCategory = GetCategory;
const deleteCategory = async (CategoryId) => {
    try {
        await CategoryRepository.delete(CategoryId);
    }
    catch (error) {
        throw new Error(`Failed to delete Category with id ${CategoryId}.`);
    }
};
exports.deleteCategory = deleteCategory;
const createCategory = async (CategoryData) => {
    const Category = CategoryRepository.create(CategoryData);
    return await CategoryRepository.save(Category);
};
exports.createCategory = createCategory;
const updateCategory = async (CategoryId, CategoryData) => {
    await CategoryRepository.update(CategoryId, CategoryData);
    const updatedCategory = await CategoryRepository.findOneBy({ idCategory: CategoryId });
    if (!updatedCategory) { }
    return updatedCategory;
};
exports.updateCategory = updateCategory;
//# sourceMappingURL=CategoryService.js.map