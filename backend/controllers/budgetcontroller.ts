import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Route,
    Query,
    Request,
    Path,
    Body,
    Tags,
    Response,
} from "tsoa"
import AccountRouter from "../routers/accountRouter"
import { GetBudgets,GetBudget, createBudget, deleteBudgetById, updateBudget } from "../services/BudgetService"
import { Budget } from "../output/entities/Budget"
import type { Request as ExRequest} from "express";
import path from "path";

@Route("budget")
@Tags()
export class budgetController extends Controller {
    @Get("/")
    @Response("200")
    public async getBudgets(@Request() req:ExRequest): Promise<Budget[]> {
        try {
            const response = await GetBudgets(req);
            return response.results;
        } catch (e) {
            this.setStatus(500);
            throw new Error("Failed to fetch budgets");
        }
    }

    
    @Get("{id}")
    @Response(200)
    public async getBudget(@Path() id:number) : Promise<Budget> {
        try {
            const response=await GetBudget(id)
            return response
        }
        catch {
            
        }
    }

    @Post("/")
    @Response(201)
    public async PostBudget(@Body() budgetdata:Partial<Budget>): Promise<Budget> {
        try {
            const response=await createBudget(budgetdata)
            return response
        }
        catch {

        }
    };

    @Put("{id}")
    @Response(201)
    public async PutBudget(@Path() id:number, @Body() budgetdata:Partial<Budget>):Promise<Budget> {
        try {
            const response=await updateBudget(id,budgetdata)
            return response
        }
        catch {

        }
    }

    @Delete("{id}")
    @Response(200)
    public async Delete(@Path() id:number) {
        try {
            const response = await deleteBudgetById(id)
            return response
        }
        catch {

        }
    }


}