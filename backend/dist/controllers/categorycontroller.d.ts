import { Controller } from "tsoa";
import type { Request as ExRequest } from "express";
import { Category } from "../output/entities/Category";
export declare class CategoryController extends Controller {
    getAccounts(req: ExRequest): Promise<Category[]>;
    getCategory(id: number): Promise<Category>;
    PostCategory(categorydata: Partial<Category>): Promise<Category>;
    PutCategory(id: number, categorydata: Partial<Category>): Promise<Category>;
    Delete(id: number): Promise<void>;
}
//# sourceMappingURL=categorycontroller.d.ts.map