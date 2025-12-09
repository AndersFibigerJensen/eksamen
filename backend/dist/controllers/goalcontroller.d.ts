import { Controller } from "tsoa";
import type { Request as ExRequest } from "express";
import { Goal } from "../output/entities/Goal";
export declare class budgetController extends Controller {
    getGoals(req: ExRequest): Promise<Goal[]>;
    getGoal(id: string): Promise<Goal>;
    PostGoal(goaldata: Partial<Goal>): Promise<Goal>;
    PutBudget(id: number, GoalData: Partial<Goal>): Promise<Goal>;
    Delete(id: number): Promise<void>;
}
//# sourceMappingURL=goalcontroller.d.ts.map