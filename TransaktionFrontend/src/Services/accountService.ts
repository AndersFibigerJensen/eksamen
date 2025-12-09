import ApiClient from "./api-client"
import type { Transaktion } from "./transaktionService"
import type { User } from "./userService"

export interface Account {
    idAccount:number,
    name:string,
    saldo:number,
    UserIdUser2:User
    transaktions:Transaktion[]
}

export default new ApiClient<Account>("/users")