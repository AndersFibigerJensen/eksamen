import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { Account } from "../../Services/accountService"
import accountService from "../../Services/accountService"



const useUpdateAccount=()=>
{
    const queryclient= useQueryClient();
    return useMutation({
        mutationFn:(data:Partial<Account>)=>accountService.update(Number(data.idAccount),data),
        onSuccess:()=> {
            queryclient.invalidateQueries({queryKey:["accounts"]})
        }
    })
}

export default useUpdateAccount