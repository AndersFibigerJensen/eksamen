import { useMutation, useQueryClient } from "@tanstack/react-query";
import budgetService, { type budget } from "../../Services/budgetService";

const useDeleteBudget=()=>
{
    const queryClient= useQueryClient();
    
    return useMutation({
        mutationFn:(budgetid:Partial<budget>)=>
             budgetService.delete(Number(budgetid.idBudget)),
        onSuccess:()=> {
            queryClient.invalidateQueries()
        }
    });
}

export default useDeleteBudget;