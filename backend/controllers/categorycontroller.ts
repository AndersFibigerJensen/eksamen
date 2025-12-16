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
import type { Request as ExRequest} from "express";
import { Category } from "../output/entities/Category";
import { createCategory, deleteCategory, GetCategories, GetCategory, updateCategory } from "../services/CategoryService";

@Route("category")
@Tags("category")
export class CategoryController extends Controller {
    @Get()
    @Response("200")
    public async getAccounts(@Request() req:ExRequest): Promise<Category[]> {
        try {
            const response = await GetCategories(req);
            return response.results;
        } catch (e) {
            this.setStatus(500);
            throw new Error("Failed to fetch budgets");
        }
    }

    @Get("{id}")
    @Response(200)
    public async getCategory(@Path() id:number) : Promise<Category> {
        try {
            const response=await GetCategory(id)
            return response
        }
        catch(error) {
            this.setStatus(404)
            throw new Error("failed to find category")
        }
    }

    @Post()
    @Response(201)
    public async PostCategory(@Body() categorydata:Partial<Category>): Promise<Category> {
        try {
            const response=await createCategory(categorydata)
            return response
        }
        catch {
            throw new Error("failed to add a new category")
        }
    };

    @Put("{id}")
    @Response(200)
    public async PutCategory(@Path() id:number, @Body() categorydata:Partial<Category>):Promise<Category> {
        try {
            const response=await updateCategory(id,categorydata)
            return response
        }
        catch(error) {
            this.setStatus(404)
            this.setStatus(400)
            throw new Error("failed to find category")
        }
    }

    @Delete("{id}")
    @Response(200)
    public async CategoryDelete(@Path() id:number) {
        try {
            const response = await deleteCategory(id)
            return response
        }
        catch(error) {
            this.setStatus(404)
            throw new Error("failed to delete category")
        }
    }


}

