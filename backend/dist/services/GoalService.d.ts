import { Goal } from "../output/entities/Goal";
export declare const GetGoals: (req: any) => Promise<{
    count: number;
    next: string;
    results: {
        userIdUser2: import("../output/entities/User").User;
        idGoal?: number;
        name: string | null;
        targetAmount: number | null;
        currentAmount: number | null;
        targetDate: string | null;
        status: string | null;
        userIdUser: number;
    }[];
}>;
export declare const GetGoal: (Goalid: string) => Promise<{
    useridUser2: import("../output/entities/User").User;
    idGoal?: number;
    name: string | null;
    targetAmount: number | null;
    currentAmount: number | null;
    targetDate: string | null;
    status: string | null;
    userIdUser: number;
    userIdUser2: import("../output/entities/User").User;
}>;
export declare const deleteGoalById: (GoalId: number) => Promise<void>;
export declare const createGoal: (GoalData: Partial<Goal>) => Promise<Goal>;
export declare const updateGoal: (GoalId: number, GoalData: Partial<Goal>) => Promise<Goal>;
//# sourceMappingURL=GoalService.d.ts.map