import { useMutation, useQueryClient } from "@tanstack/react-query"
import transaktionService, { type Transaktion } from "../../Services/transaktionService"


const useCreateTransaktion=()=> {
        const queryclient= useQueryClient();
    return useMutation({
        mutationFn:(data:Partial<Transaktion>)=>transaktionService.create(data),
        onSuccess:()=> {
            queryclient.invalidateQueries({queryKey:["goal"]})
        }
    })
}

export default useCreateTransaktion