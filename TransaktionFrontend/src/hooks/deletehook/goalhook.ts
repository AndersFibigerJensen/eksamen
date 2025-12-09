import { useMutation, useQueryClient } from "@tanstack/react-query";
import goalService from "../../Services/goalService";



const useDeleteGoal=()=>
{
    const queryClient= useQueryClient();
    
    return useMutation({
        mutationFn:(goalid:number)=> goalService.delete(goalid),
        onSuccess:()=> {
            queryClient.invalidateQueries()
        }
    });
}

export default useDeleteGoal;