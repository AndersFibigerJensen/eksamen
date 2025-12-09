import { useMutation, useQueryClient } from "@tanstack/react-query";
import budgetService from "../../Services/budgetService";

const useDeleteBudget=()=>
{
    const queryClient= useQueryClient();
    
    return useMutation({
        mutationFn:(budgetid:number)=> budgetService.delete(budgetid),
        onSuccess:()=> {
            queryClient.invalidateQueries()
        }
    });
}

export default useDeleteBudget;