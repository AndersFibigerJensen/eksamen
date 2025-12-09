import { SelectQueryBuilder } from "typeorm/query-builder/SelectQueryBuilder.js";
import { AppDataSource } from "../data-source";
import { Budget } from "../output/entities/Budget";
import { Category } from "../output/entities/Category";
import { Account } from "../output/entities/Account";
import {DEFAULT_PAGE_SIZE, START_PAGE,MAX_PAGE_SIZE} from "../routers/budgetRouter"
import { Max_Page_size } from "../routers/categoryRouter";




const BudgetRepository= AppDataSource.getRepository(Budget)

const addCategoryFilter= (
    queryBuilder:SelectQueryBuilder<Budget>,
    categoryId:number|undefined
)=>
{ 
    if(categoryId)
        {
            queryBuilder.andWhere((qb)=>
            {
                const subQuery=qb
                .subQuery()
                .select("Budget.idBudget")
                .from(Budget,"Budget")
                .leftJoin("Budget.categoryIdCategory2","category")
                //make sure to add the right ids in when the time comes
                .where("category.idCategory = :categoryid")
                .getQuery();
                return "Budget.idBudget in " + subQuery
            })
            .setParameter("categoryid",categoryId)
        }
}

const addAccountFilter= (
    queryBuilder:SelectQueryBuilder<Budget>,
    userId:number|undefined
)=>
{ 
    if(userId)
        {
            queryBuilder.andWhere((qb)=>
            {
                const subQuery=qb
                .subQuery()
                .select("Budget.idBudget")
                .from(Budget,"Budget")
                .leftJoin("Budget.userIdUser2","User")
                .where("Budget.userIdUser2= :userId")
                .getQuery();
                return "Budget.idBudget in " + subQuery
            })
            .setParameter("userId",userId)
        }
}

//needs to be fixed
const addDateFilter= (
    queryBuilder:SelectQueryBuilder<Budget>,
    DateLow:string|undefined,
    DateHigh:string|undefined,
)=>
{ 
    if (DateLow) {
        queryBuilder.andWhere("Budget.budget_date >= :DateLow", { DateLow });
    }

    if (DateHigh) {
        queryBuilder.andWhere("Budget.budget_date <= :DateHigh", { DateHigh });
    }
}

const sortorder = (
    QueryBuilder:SelectQueryBuilder<Budget>,
    sortorder:string|undefined
) =>
{
    if(!sortorder) QueryBuilder.orderBy("Budget.idBudget","ASC");
    if(sortorder=="low") QueryBuilder.orderBy("Budget.idBudget","DESC");
}

const buildBudgetQuery = (req:any) =>
{
    const categoryId=req.query.CategoryId ? Number(req.query.CategoryId): undefined
    const userId = req.header.userId ? Number(req.query.userId) : undefined
    const TransaktionDateHigh= req.query.TransaktionDateHigh ? String(req.query.TransaktionDateHigh) : undefined
    const TransaktionDateLow= req.query.TransaktionDateLow ? String(req.query.TransaktionDateLow) : undefined
    const queryBuilder=BudgetRepository
    .createQueryBuilder("Budget")
    .leftJoinAndSelect("Budget.categoryIdCategory2","category")
    .leftJoinAndSelect("Budget.userIdUser2","user");
    sortorder(queryBuilder,req.query.sortorder ? String(req.query.sortorder) : undefined);
    addCategoryFilter(queryBuilder,categoryId)
    addAccountFilter(queryBuilder,userId)
    addDateFilter(queryBuilder,TransaktionDateHigh,TransaktionDateLow)

    return queryBuilder;
}

export const GetBudgets= async (req:any)=>
{
    const page= req.query.page ? Number(req.query.page) :START_PAGE;
    let pagesize= req.query.pagesize ? Number(req.query.pagesize) :DEFAULT_PAGE_SIZE;

    if(pagesize>Max_Page_size) {
        pagesize=Max_Page_size;
    }
    const querybuilder= buildBudgetQuery(req);
    try {
        querybuilder.skip((page-1)*pagesize).take(pagesize);
        const [budgets,totalcount]= await querybuilder.getManyAndCount();
        return {
            count: totalcount,
            next: totalcount > page * pagesize ? `?page=${page + 1}&pagesize=${pagesize}` : null,
            results: budgets.map((budget) => ({
                ...budget,
            userIdUser2: budget.userIdUser2,
            categoryIdCategory2: budget.categoryIdCategory2,
            })),
        }}catch(error)
        {
            throw new Error("Failed to get Transaktions.")
        }
};

export const GetBudget= async (Budgetid:number)=>
{
    try{
        const Budget= await BudgetRepository.findOne({
            where:{idBudget:Number(Budgetid)},
            relations:["userIdUser2","categoryIdCategory2"]
        });
        return {
            ...Budget,
            userIdUser2:Budget.userIdUser2,
            categoryIdCategory2:Budget.categoryIdCategory2
        };
    } catch(error)
    {
        console.log(error)
        throw new Error(`Transaktion with ID ${Budgetid} not found`)
    }
};

export const deleteBudgetById = async (BudgetId: number) => {
  try {
    await BudgetRepository.delete(BudgetId);
  } catch (error) {
    throw new Error(`Failed to delete game with ID ${BudgetId}.`);
  }
};

export const createBudget = async (budgetData: Partial<Budget>) => {
  const budget = BudgetRepository.create(budgetData);
  return await BudgetRepository.save(budget);
};

export const updateBudget = async (
  budgetId: number,
  budgetData: Partial<Budget>
) => {
  await BudgetRepository.update(budgetId, budgetData);
  const updatedBudget = await BudgetRepository.findOneBy({ idBudget: budgetId });
    if (!updatedBudget) { }
    return updatedBudget;
};