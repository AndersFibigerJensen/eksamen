import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Transaktion } from "../../Services/transaktionService";
import transaktionService from "../../Services/transaktionService";




const useUpdateTransaktion=()=>
{
    const queryclient= useQueryClient();
    return useMutation({
        mutationFn:(data:Partial<Transaktion>)=>transaktionService.update(Number(data.idTransaktion),data),
        onSuccess:()=> {
            queryclient.invalidateQueries({queryKey:["transactions"]})
        }
    })
}

export default useUpdateTransaktion