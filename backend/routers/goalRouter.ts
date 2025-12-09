import { Router } from "express";
import { Goal } from "../output/entities/Goal";
import { AppDataSource } from "../data-source";
import { deleteGoalById, GetGoal, GetGoals } from "../services/GoalService";
import { User } from "../output/entities/User";

interface ModifiniedGoal
{
    idGoal?:number;
    name:string|null;
    targetAmount:number|null;
    currentAmount:number|null;
    targetDate:string|null;
    status:string|null;
    userIdUser:number;
    userIdUser2:User;
}

export const DEFAULT_PAGE_SIZE = 20;
export const START_PAGE = 1;
export const MAX_PAGE_SIZE = 40;

interface Response {
    count: number;
    next:string|null
    results: ModifiniedGoal[];
}

const GoalRouter= Router();

const buildGoalResponse = (
    goals: ModifiniedGoal[],
    total:number,
    req:any
): Response => {
    const page= req.query.page ? Number(req.query.page): START_PAGE;

    let pagesize = req.query.pagesize 
    ? Number(req.query.pagesize) : DEFAULT_PAGE_SIZE;
    
    if(pagesize>MAX_PAGE_SIZE) {
        pagesize= MAX_PAGE_SIZE
    }

    const totalPages= Math.ceil(total/pagesize)

    return {
        count:total,
        next:
        page<totalPages ?
        `${process.env.Server_URL}/transactions?page
        =${page+1}&pagesize=${pagesize}`:null,
        results:goals
    }
}

const GoalRepository = AppDataSource.getRepository(Goal);

GoalRouter.get("/", async (req, res) => {
    const {results,count} = await GetGoals(req)
    const response:Response = await buildGoalResponse(results,count,req)
    res.json(response) 
});

GoalRouter.get("/:id",async(req,res)=>
{
    const Goalid= req.params.id;
    try {
        const Goal= await GetGoal(Goalid);
        if(Goal)
        {
            res.send(Goal);
        } else {
            res.status(404).send({error:"transaktion not found"})
        }
    }
    catch(error) {
        res.status(500).send({error:"failed to fetch transaktion"})
    }
});

GoalRouter.delete("/:id",async(req,res) =>
{
    const goalid= Number(req.params.id)
    try {
        await deleteGoalById(goalid);
        res.status(204).send();
    } catch(error)
    {
        res.status(500).send({error:"failed to delete goal"});
    }
});

GoalRouter.post("/",async (req,res)=>
{
    const goalData= req.body;
    try {
        const newGoal= GoalRepository.create(goalData);
        const savedGoal= await GoalRepository.save(newGoal);
        res.status(201).send(savedGoal);
    } catch(error) {
        res.status(500).send({error:"failed to create goal"})
    }
});

GoalRouter.put("/:id",async(req,res)=>
{
    const goalid= Number(req.params.id);
    const goalData= req.body;
    try {
        await GoalRepository.update(goalid,goalData);   
        const updatedGoal= await GoalRepository.findOneBy({idGoal:goalid});
        if(!updatedGoal) { }
        res.status(200).send(updatedGoal);
    }   catch(error) {
        res.status(500).send({error:"failed to update goal"})
    }
});

export default GoalRouter;