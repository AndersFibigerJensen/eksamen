import { Account } from "./Account";
import { Category } from "./Category";
export declare class Transaktion {
    idTransaktion: number;
    amount: number;
    description: string | null;
    date: string | null;
    type: "income" | "expends" | null;
    categoryIdCategory: number;
    accountIdAccount: number;
    accountIdAccount2: Account;
    categoryIdCategory2: Category;
}
//# sourceMappingURL=Transaktion.d.ts.map