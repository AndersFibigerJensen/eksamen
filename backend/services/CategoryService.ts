import { SelectQueryBuilder } from "typeorm/query-builder/SelectQueryBuilder.js";
import { AppDataSource } from "../data-source";
import { Category } from "../output/entities/Category";
import {DEFAULT_PAGE_SIZE, START_PAGE,Max_Page_size} from "../routers/categoryRouter"

const CategoryRepository= AppDataSource.getRepository(Category)

export const sortorder = (
    QueryBuilder:SelectQueryBuilder<Category>,
    sortorder:string|undefined
) =>
{
    if(!sortorder) QueryBuilder.orderBy("Category.idCategory","ASC");
    if(sortorder=="low") QueryBuilder.orderBy("Category.idCategory","DESC");
}

const buildCategoryQuery = (req:any) => {
    const sortorderParam = req.query.sortorder ? String(req.query.sortorder) : undefined;
    const querybuilder= CategoryRepository.createQueryBuilder("Category");
    sortorder(querybuilder,sortorderParam);
    return querybuilder;
}

export const GetCategories= async (req:any)=>
{
    const page= req.query.page 
    ? Number(req.query.page) :START_PAGE;
    let pagesize= req.query.pagesize ?
     Number(req.query.pagesize) : DEFAULT_PAGE_SIZE;

    if(pagesize>Max_Page_size) {
        pagesize=Max_Page_size;
    }
    const querybuilder= buildCategoryQuery(req);
    try {
        querybuilder.skip((page-1)*pagesize).take(pagesize);
        const [Categories,totalcount]= await querybuilder.getManyAndCount();
        return {
            count: typeof totalcount === 'bigint' 
        ? Number(totalcount) 
        : totalcount,
            results: Categories.map((Category) => ({
                ...Category,
                budgets: Category.budgets,
                transaktions: Category.transaktions,
            })),
        }}catch(error)
        {
            throw new Error("Failed to get Transaktions.")
        }

};

export const GetCategory= async (Categoryid:number)=>
{
    try{
        const Category= await CategoryRepository.findOne({
            where:{idCategory:Number(Categoryid)},
            relations:["userIdUser2"]
        });
        return {
            ...Category,
            transaktions: Category?.transaktions,
            budgets: Category?.budgets,
        };
    } catch(error)
    {
        throw new Error(`Transaktion with ID ${Categoryid} not found`)
    }
};

export const deleteCategory= async(CategoryId:number) =>
{
    try {
        await CategoryRepository.delete(CategoryId);
    } catch(error) {
        throw new Error(`Failed to delete Category with id ${CategoryId}.`)
    }
}

export const createCategory = async (CategoryData: Partial<Category>) => {
  const Category = CategoryRepository.create(CategoryData);
  return await CategoryRepository.save(Category);
};

export const updateCategory = async (
  CategoryId: number,
  CategoryData: Partial<Category>
) => {
  await CategoryRepository.update(CategoryId, CategoryData);
  const updatedCategory = await CategoryRepository.findOneBy({ idCategory: CategoryId });
    if (!updatedCategory) { }
    return updatedCategory;
};