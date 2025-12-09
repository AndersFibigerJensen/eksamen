import { useMutation, useQueryClient } from "@tanstack/react-query";
import transaktionService from "../../Services/transaktionService";

const useDeleteTransaktion=()=>
{
    const queryClient= useQueryClient();
    
    return useMutation({
        mutationFn:(Transaktionid:number)=> transaktionService.delete(Transaktionid),
        onSuccess:()=> {
            queryClient.invalidateQueries()
        }
    });
}

export default useDeleteTransaktion;