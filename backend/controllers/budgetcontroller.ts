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
    SuccessResponse
} from "tsoa"
import { GetBudgets,GetBudget, createBudget, deleteBudgetById, updateBudget } from "../services/BudgetService"
import { Budget } from "../output/entities/Budget"
import type { Request as ExRequest} from "express";

@Route("budget")
@Tags("budget")
export class BudgetController extends Controller {
    @Get()
     @SuccessResponse(200)
    public async getBudgets(@Request() req:ExRequest): Promise<Budget[]> {
        try {
            const response = await GetBudgets(req);
            return response.results;
        } catch (e) {
            this.setStatus(400);
            throw new Error("Failed to fetch budgets");
        }
    }

    
    @Get("{id}")
     @SuccessResponse(200)
    public async getBudget(@Path() id:number) : Promise<Budget> {
        try {
            const response=await GetBudget(id)
            return response
        }
        catch(error) {
            this.setStatus(404)
            throw new Error("failed to get budget")
        }
    }

    @Post()
     @SuccessResponse(201)
    public async PostBudget(@Body() budgetdata:Partial<Budget>): Promise<Budget> {
        try {
            const response=await createBudget(budgetdata)
            return response
        }
        catch(error) {
            this.setStatus(400)
            throw new Error("failed to add a budget")
        }
    };

    @Put("{id}")
     @SuccessResponse(200)
    public async PutBudget(@Path() id:number, @Body() budgetdata:Partial<Budget>):Promise<Budget> {
        try {
            const response=await updateBudget(id,budgetdata)
            return response
        }
        catch(error) {
            this.setStatus(400)
            throw new Error("failed to update budget")
        }
    }

    @Delete("{id}")
     @SuccessResponse(200)
    public async Delete(@Path() id:number) {
        try {
            const response = await deleteBudgetById(id)
            return response
        }
        catch(error) {
            this.setStatus(404)
            throw new Error("failed to delete budget")
        }
    }
}