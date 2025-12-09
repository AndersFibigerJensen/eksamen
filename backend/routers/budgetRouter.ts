import { Router } from "express";
import { Budget } from "../output/entities/Budget";
import { AppDataSource } from "../data-source";
import { Category } from "../output/entities/Category";
import { User } from "../output/entities/User";
import { createBudget, deleteBudgetById, GetBudget, GetBudgets, updateBudget } from "../services/BudgetService";
import { error } from "console";
import { Max_Page_size } from "./categoryRouter";

interface ModifiedBudget {
    idBudget:number;
    amount:number;
    budgetDate:string|null;
    categoryIdCategory:number;
    userIdUser:number;
    categoryIdCategory2:Category;
    userIdUser2:User;
}

export const DEFAULT_PAGE_SIZE = 20;
export const START_PAGE = 1;
export const MAX_PAGE_SIZE = 40;


interface Response {
    count: number;
    next: string|null;
    results: ModifiedBudget[];
}

const BudgetRouter= Router();

const buildBudgetsResponse= (
    Budgets:ModifiedBudget[],
    total:number|bigint,
    req:any
): Response => {
    const page = req.query.page ? Number(req.query.page) : START_PAGE;
    let size= req.query.pagesize
    ? Number(req.query.pagesize) :DEFAULT_PAGE_SIZE

    if(size>Max_Page_size) {
        size= Max_Page_size
    }

    const numericTotal = typeof total === "bigint" ? Number(total) : total;

    const toalPages= Math.ceil(numericTotal/size)

    return {
        count:numericTotal,
        next:
        page<toalPages ?
        `${process.env.Server_URL}/budgets?page=
        ${page+1}&pagesize=${size}`: null,
        results:Budgets
    }

}



BudgetRouter.get("/", async (req, res) => { 
    const {results,count}= await GetBudgets(req)
    const response:Response= buildBudgetsResponse(results,count,req)
    res.json(response);
});

BudgetRouter.get("/:id",async(req,res)=>
{
    const budgetid=Number(req.params.id);
    try {
        const budget= await GetBudget(budgetid);
        if(budget)
        {
            res.send(budget)
        } else {
            res.status(404).send({error:"budget not found"})
        }
    }
    catch(error) {
        res.status(500).send({error:"failed to fetch budget"})
    }
})

BudgetRouter.delete("/:id",async (req,res)=>
{
    const budgetid= Number(req.params.id);
    try {
        await deleteBudgetById(budgetid)
        res.status(204).send();
    } catch(error) {
        res.status(500).send({error:"failed to delete budget"})
    }
});

BudgetRouter.post("/",async(req,res)=>
{
    const budgetData= req.body;
    try {
        const newBudget= await createBudget(budgetData);
        res.status(201).send(newBudget);
    }
    catch(error) {
        res.status(500).send({error:"failed to create budget"})
    }
});

BudgetRouter.put("/:id",async(req,res)=>
{
    const budgetid= Number(req.params.id);
    const budgetData= req.body;
    try {
        const updatedBudget= await updateBudget(budgetid,budgetData);
        res.status(200).send(updatedBudget);
    }
    catch(error) {
        res.status(500).send({error:"failed to update budget"})
    }
});

export default BudgetRouter;