import { useQuery } from "@tanstack/react-query"
import budgetService from "../../Services/budgetService"


const UseBudget=(id:number)=>
    useQuery({
        queryKey:["budget",id],
        queryFn:()=> budgetService.get(id)
    })

export default UseBudget