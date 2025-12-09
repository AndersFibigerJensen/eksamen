import { Transaktion } from "../output/entities/Transaktion";
export declare const GetTransaktions: (req: any) => Promise<{
    count: number;
    next: string;
    results: {
        accountIdAccount2: import("../output/entities/Account").Account;
        categoryIdCategory2: import("../output/entities/Category").Category;
        idTransaktion: number;
        amount: number;
        description: string | null;
        date: string | null;
        type: "income" | "expends" | null;
        categoryIdCategory: number;
        accountIdAccount: number;
    }[];
}>;
export declare const GetTransaktion: (transaktionid: string) => Promise<{
    accountIdAccount2: import("../output/entities/Account").Account;
    categoryIdCategory2: import("../output/entities/Category").Category;
    idTransaktion: number;
    amount: number;
    description: string | null;
    date: string | null;
    type: "income" | "expends" | null;
    categoryIdCategory: number;
    accountIdAccount: number;
}>;
export declare const deleteTransaktionById: (TransaktionId: number) => Promise<void>;
export declare const createTransaktion: (TransaktionData: Partial<Transaktion>) => Promise<Transaktion>;
export declare const updateTransaktion: (TransaktionId: number, TransaktionData: Partial<Transaktion>) => Promise<Transaktion>;
//# sourceMappingURL=TransaktionService.d.ts.map