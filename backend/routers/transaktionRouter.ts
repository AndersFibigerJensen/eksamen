import { Router } from "express";
import { Transaktion } from "../output/entities/Transaktion";
import { AppDataSource } from "../data-source";
import { Account } from "../output/entities/Account";
import { Category } from "../output/entities/Category";
import { createTransaktion, deleteTransaktionById, GetTransaktion, GetTransaktions, updateTransaktion } from "../services/TransaktionService";
import { count, error } from "console";
import { Max_Page_size } from "./categoryRouter";

interface ModifiniedTransaktion {
    idTransaktion: number;
    amount: number;
    description: string | null;
    date: string | null;
    type: "income" | "expends" | null;
    categoryIdCategory: number;
    accountIdAccount: number;
    accountIdAccount2: Account;
    categoryIdCategory2:Category;
}

export const DEFAULT_PAGE_SIZE = 20;
export const START_PAGE = 1;
export const MAX_PAGE_SIZE = 40;


interface Response {
    count: number;
    next:string|null;
    results: ModifiniedTransaktion[];
}

const TransaktionRouter= Router();

const buildTransaktionResponse = (
    transactions: ModifiniedTransaktion[],
    total:number,
    req:any
): Response => {
    const page= req.query.page ? Number(req.query.page): START_PAGE;

    let pagesize = req.query.pagesize 
    ? Number(req.query.pagesize) : DEFAULT_PAGE_SIZE;
    
    if(pagesize>MAX_PAGE_SIZE) {
        pagesize= Max_Page_size
    }

    const totalPages= Math.ceil(total/pagesize)

    return {
        count:total,
        next:
        page<totalPages ?
        `${process.env.Server_URL}/transactions?page
        =${page+1}&pagesize=${pagesize}`:null,
        results:transactions
    }
}

TransaktionRouter.get("/",async(req,res)=>
{
    const {results,count}= await GetTransaktions(req)
    try {
        const response:Response = await buildTransaktionResponse(results,count,req)
        res.json(response)
        res.status(200).send()

    }catch(error)
    {
        res.status(500).send({error:"failed to fetch transaktion"})  
    }

})





TransaktionRouter.get("/:id",async(req,res)=>
{
    const Transaktionid= req.params.id;
    try {
        const transaktion= await GetTransaktion(Transaktionid);
        if(transaktion)
        {
            res.send(transaktion);
        } else {
            res.status(404).send({error:"transaktion not found"})
        }
    }
    catch(error) {
        res.status(500).send({error:"failed to fetch transaktion"})
    }
})

TransaktionRouter.delete("/:id",async (req,res)=>
{
    const transaktionid= Number(req.params.id);
    try {
        await deleteTransaktionById(transaktionid);
        res.status(204).send();
    } catch(error) {
        res.status(500).send({error:"failed to delete transaktion"})
    }
});

TransaktionRouter.post("/",async (req,res)=>
{
    const transaktionData= req.body;
    try {
        const newTransaktion= await createTransaktion(transaktionData);
        res.status(201).send(newTransaktion);
    } catch(error) {
        res.status(500).send({error:"failed to create transaktion"})
    }
});

TransaktionRouter.put("/:id",async(req,res)=>
{
    const transaktionid= Number(req.params.id);
    const transaktionData= req.body;
    try {
        const updatedTransaktion= await updateTransaktion(transaktionid,transaktionData);
        res.status(200).send(updatedTransaktion);
    }   catch(error) {
        res.status(500).send({error:"failed to update transaktion"})
    }
});

export default TransaktionRouter;