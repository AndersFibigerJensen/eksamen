import { useMutation, useQueryClient } from "@tanstack/react-query";
import transaktionService, { type Transaktion } from "../../Services/transaktionService";

const useDeleteTransaktion=()=>
{
    const queryClient= useQueryClient();
    
    return useMutation({
        mutationFn:(Transaktionid:Partial<Transaktion>)=> transaktionService.delete(Number(Transaktionid.idTransaktion)),
        onSuccess:()=> {
            queryClient.invalidateQueries()
        }
    });
}

export default useDeleteTransaktion;