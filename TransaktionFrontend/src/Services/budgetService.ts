import ApiClient from "./api-client"
import type { Category } from "./categoryService"
import type  {User} from "./userService"

export interface budget {
    idBudget:number,
    amount:number,
    budgetDate:string|null,
    categoryIdCategory:number,
    userIdUser:number,
    CategoryIdCategory2:Category
    UserIdUser2:User
}

export default new ApiClient<budget>("/budgets")