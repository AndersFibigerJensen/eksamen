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
import type { Request as ExRequest,Response as ExResponse } from "express";
import { Goal } from "../output/entities/Goal";
import { createGoal, deleteGoalById, GetGoal, GetGoals, updateGoal } from "../services/GoalService";

@Route("goal")
@Tags()
export class budgetController extends Controller {
    @Get("/")
    @Response(200)
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
    @Response(200)
    public async getGoal(@Path() id:string) : Promise<Goal> {
        try {
            const response=await GetGoal(id)
            return response
        }
        catch {
            
        }
    }

    @Post("/")
    @Response(201)
    public async PostGoal(@Body() goaldata:Partial<Goal>): Promise<Goal> {
        try {
            const response=await createGoal(goaldata)
            return response
        }
        catch {

        }
    };

    @Put("{id}")
    @Response(201)
    public async PutBudget(@Path() id:number,@Body() GoalData:Partial<Goal>):Promise<Goal> {
        try {
            const response=await updateGoal(id,GoalData)
            return response
        }
        catch {

        }
    }

    @Delete("{id}")
    @Response(200)
    public async Delete(@Path() id:number) {
        try {
            const response = await deleteGoalById(id)
            return response
        }
        catch {

        }
    }


}