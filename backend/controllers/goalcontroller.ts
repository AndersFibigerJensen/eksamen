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
    SuccessResponse,
} from "tsoa"
import type { Request as ExRequest,Response as ExResponse } from "express";
import { Goal } from "../output/entities/Goal";
import { createGoal, deleteGoalById, GetGoal, GetGoals, updateGoal } from "../services/GoalService";

@Route("goal")
@Tags("goal")
export class GoalController extends Controller {
    @Get()
     @SuccessResponse(200)
    public async getGoals(@Request() req:ExRequest): Promise<Goal[]> {
        try {
            const response = await GetGoals(req);
            return response.results;
        } catch (e) {
            this.setStatus(500);
            throw new Error("Failed to fetch budgets");
        }
    }

    @Get("{id}")
     @SuccessResponse(200)
    public async getGoal(@Path() id:string) : Promise<Goal> {
        try {
            const response=await GetGoal(id)
            return response
        }
        catch (error) {
            this.setStatus(404);
            throw new Error("Failed to fetch goal");
        }
    }

    @Post()
     @SuccessResponse(201)
    public async PostGoal(@Body() goaldata:Partial<Goal>): Promise<Goal> {
        try {
            const response=await createGoal(goaldata)
            return response
        }
        catch (error) {
            this.setStatus(400)
            throw new Error("failed to add goal")
        }
    };

    @Put("{id}")
     @SuccessResponse(200)
    public async PutBudget(@Path() id:number,@Body() GoalData:Partial<Goal>):Promise<Goal> {
        try {
            const response=await updateGoal(id,GoalData)
            return response
        }
        catch(error) {
            
            this.setStatus(404);
            throw new Error("Failed to update transaction");
        }
    }

    @Delete("{id}")
     @SuccessResponse(200)
    public async Delete(@Path() id:number):Promise<void> {
        try {
            const response = await deleteGoalById(id)
        }
        catch(error) {
            
            this.setStatus(404);
            throw new Error("Failed to delete transaction");
        }
    }


}