import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Route,
    Query,
    Request,
    Response,
    Path,
    Body,
    Tags,
    SuccessResponse,
} from "tsoa"
import type { Request as ExRequest,Response as ExResponse } from "express";
import { Transaktion } from "../output/entities/Transaktion";
import { createTransaktion, deleteTransaktionById, GetTransaktion, GetTransaktions, updateTransaktion } from "../services/TransaktionService";

@Route("transaktion")
@Tags()
export class transaktionController extends Controller {

    
    @Get("/")
    @SuccessResponse(200)
    public async getTransaktions(@Request() req:ExRequest): Promise<Transaktion[]> {
        try {
            const response = await GetTransaktions(req);
            this.setStatus(200)
            return response.results;
        } catch (e) {
            this.setStatus(500);
            throw new Error("Failed to fetch budgets");
        }
    }

    
    @Get("{id}")
    @SuccessResponse(200)
    public async getTransaktion(@Path() id:string) : Promise<Transaktion> {
        try {
            const response=await GetTransaktion(id)
            this.setStatus(200)
            return response
        }
        catch {
            
        }
    }

    @Post("/")
    @SuccessResponse(201)
    public async PostBudget(@Body() transaktiondata:Partial<Transaktion>): Promise<Transaktion> {
        try {
            const response=await createTransaktion(transaktiondata)
            this.setStatus(200)
            return response
        }
        catch {

        }
    };

    @Put("{id}")
    @SuccessResponse(200)
    public async PutBudget(@Path() id:number, @Body() transaktiondata:Partial<Transaktion>):Promise<Transaktion> {
        try {
            const response=await updateTransaktion(id,transaktiondata)
            this.setStatus(200)
            return response
        }
        catch {

        }
    }

    @Delete("{id}")
    @SuccessResponse(200)
    public async Delete(@Path() id:number) {
        try {
            const response = await deleteTransaktionById(id)
            return response
        }
        catch {

        }
    }


}


