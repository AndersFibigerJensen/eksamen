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
    SuccessResponse,
} from "tsoa"
import AccountRouter from "../routers/accountRouter"
import { GetBudgets,GetBudget, createBudget, deleteBudgetById, updateBudget } from "../services/BudgetService"
import { Budget } from "../output/entities/Budget"
import type { Request as ExRequest} from "express";
import path from "path";

@Route("user")
@Tags()
export class budgetController extends Controller {

     @SuccessResponse(200)
    @Get("/")
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
     @SuccessResponse(200)
    public async getBudget(@Path() id:number) : Promise<Budget> {
        try {
            const response=await GetBudget(id)
            return response
        }
        catch {
            
        }
    }

    @Post("/")
     @SuccessResponse(200)
    public async PostBudget(@Body() budgetdata:Partial<Budget>): Promise<Budget> {
        try {
            const response=await createBudget(budgetdata)
            return response
        }
        catch {

        }
    };

    @Put("{id}")
     @SuccessResponse(200)
    public async PutBudget(@Path() id, @Body() budgetdata:Partial<Budget>):Promise<Budget> {
        try {
            const response=await updateBudget(id,budgetdata)
            return response
        }
        catch {

        }
    }

    @Delete("{id}")
     @SuccessResponse(200)
    public async Delete(@Path() id) {
        try {
            const response = await deleteBudgetById(id)
            return response
        }
        catch {

        }
    }


}