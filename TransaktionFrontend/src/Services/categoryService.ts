import type { Transaktion } from "./transaktionService";
import type { budget } from "./budgetService";
import ApiClient from "./api-client";


export interface Category {
    idCategory:number,
    name:string,
    type:string,
    budgets:budget[],
    transaktions:Transaktion[]
}

export default new ApiClient<Category>("/categories")