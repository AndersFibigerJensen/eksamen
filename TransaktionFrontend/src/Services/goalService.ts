import ApiClient from "./api-client"

export interface goal {
    idGoal:number,
    name:string|null,
    targetAmount:number|null,
    currentAmount:number|null,
    status:string|null,
    userIdUser:number
}

export default new ApiClient<goal>("/goals")