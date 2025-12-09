import { Budget } from "../output/entities/Budget";
import { Category } from "../output/entities/Category";
export declare const GetBudgets: (req: any) => Promise<{
    count: number;
    next: string;
    results: {
        userIdUser2: import("../output/entities/User").User;
        categoryIdCategory2: Category;
        idBudget: number;
        amount: number;
        budgetDate: string | null;
        categoryIdCategory: number;
        userIdUser: number;
    }[];
}>;
export declare const GetBudget: (Budgetid: number) => Promise<{
    userIdUser2: import("../output/entities/User").User;
    categoryIdCategory2: Category;
    idBudget: number;
    amount: number;
    budgetDate: string | null;
    categoryIdCategory: number;
    userIdUser: number;
}>;
export declare const deleteBudgetById: (BudgetId: number) => Promise<void>;
export declare const createBudget: (budgetData: Partial<Budget>) => Promise<Budget>;
export declare const updateBudget: (budgetId: number, budgetData: Partial<Budget>) => Promise<Budget>;
//# sourceMappingURL=BudgetService.d.ts.map