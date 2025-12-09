import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { Account } from "../../Services/accountService"
import accountService from "../../Services/accountService"




const useCreateAccount=()=>
{
        const queryclient= useQueryClient();
    return useMutation({
        mutationFn:(data:Partial<Account>)=>accountService.create(data),
        onSuccess:()=> {
            queryclient.invalidateQueries({queryKey:["category"]})
        }
    })
}

export default useCreateAccount