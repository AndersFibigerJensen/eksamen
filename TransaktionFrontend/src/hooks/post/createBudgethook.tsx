import {useMutation, useQueryClient } from "@tanstack/react-query"
import budgetService, { type budget } from "../../Services/budgetService"



const useCreateBudget=()=>
{
        const queryclient= useQueryClient();
    return useMutation({
        mutationFn:(data:Partial<budget>)=>budgetService.create(data),
        onSuccess:()=> {
            queryclient.invalidateQueries({queryKey:["category"]})
        }
    })
}

export default useCreateBudget