import { Router } from "express";
import { AuthService } from "../services/AuthService";


const authRouter=Router();

authRouter.post("/login",async (req,res)=>{
    const {username,password}=req.body
    try{
        const result= await AuthService.login(username,password);
        res.send(result);
    }
    catch(error)
    {
        res.status(400).json({message:(error as Error).message});
    }
});

authRouter.post("/register",async (req,res)=>{
    const userdata= req.body;
    try{
        const result= await AuthService.register(userdata);
        res.send(result);
    }
    catch(error)
    {
        res.status(400).json({message:(error as Error).message});
    }
});

export default authRouter;