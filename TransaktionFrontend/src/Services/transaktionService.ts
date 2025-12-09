import type { Account } from "./accountService"
import ApiClient from "./api-client"
import type { Category } from "./categoryService"

export interface Transaktion
{
    idTransaktion:number
    amount:number,
    date:string,
    description:string,
    type: "income|expends",
    accountIdAccount:number,
    accountIdAccount2:Account
    categoryIdCategory2:Category
    
}

export default new ApiClient<Transaktion>("/transactions")