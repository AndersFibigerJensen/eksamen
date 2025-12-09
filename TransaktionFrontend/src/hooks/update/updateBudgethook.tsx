import { useMutation,useQueryClient } from "@tanstack/react-query"
import budgetService, { type budget } from "../../Services/budgetService"

const useUpdateBudget=()=>
{
    const queryclient= useQueryClient();
    return useMutation({
        mutationFn:(data:Partial<budget>)=>budgetService.update(Number(data.idBudget),data),
        onSuccess:()=> {
            queryclient.invalidateQueries({queryKey:["budgets"]})
        }
    })
}

export default useUpdateBudget