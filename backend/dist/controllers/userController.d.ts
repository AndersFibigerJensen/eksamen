import { Controller } from "tsoa";
import { Budget } from "../output/entities/Budget";
import type { Request as ExRequest } from "express";
export declare class budgetController extends Controller {
    getBudgets(req: ExRequest): Promise<Budget[]>;
    getBudget(id: number): Promise<Budget>;
    PostBudget(budgetdata: Partial<Budget>): Promise<Budget>;
    PutBudget(id: any, budgetdata: Partial<Budget>): Promise<Budget>;
    Delete(id: any): Promise<void>;
}
//# sourceMappingURL=userController.d.ts.map