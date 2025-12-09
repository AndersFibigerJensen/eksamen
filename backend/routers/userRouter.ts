import { Router } from "express";
import { User } from "../output/entities/User";
import { AppDataSource } from "../data-source";
import { createUser, deleteUserById, GetUser, updateUser } from "../services/UserService";
import { updateBudget } from "../services/BudgetService";

interface Response {
    count: number;
    results: User[];
}

const UserRouter= Router();

const UserRepository = AppDataSource.getRepository(User);

UserRouter.get("/", async (req, res) => { 
    const users = await UserRepository.find();
    const response: Response = {
        count: users.length,
        results: users
    };
    res.json(response);
});

UserRouter.get("/:username/:password",async(req,res)=>
{
    const username= req.params.username;
    const password= req.params.password;
    try {
        const user= await GetUser(username,password);
        if(user)
        {
            res.send(user);
        } else {
            res.status(404).send({error:"transaktion not found"})
        }
    }
    catch(error) {
        res.status(500).send({error:"failed to fetch transaktion"})
    }
})

UserRouter.delete("/:id",async(req,res)=>{
    const userid= Number(req.params.id);
    try {
        await deleteUserById(userid);
        res.status(204).send();
    } catch(error)
    {
        res.status(500).send({error: " failed to delete user"})
    }
})

UserRouter.post("/",async(req,res)=>{
    const userdata = req.body
    try {
        await createUser(userdata);
        res.json(userdata)
        res.status(201).send()
    } catch(error)
    {
        res.status(201).send({error : "failed to add user"})
    }
})

UserRouter.put("/:id",async(req,res)=>{
    const userid= Number(req.params.id)
    const userdata = req.body
    try {
        await updateUser(userid,userdata);
        res.json(userdata)
        res.status(201).send()
    } catch(error)
    {
        res.status(400).send({error : "failed to add user"})
    }
})

export default UserRouter;  