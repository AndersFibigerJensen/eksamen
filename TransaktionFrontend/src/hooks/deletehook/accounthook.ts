import { useMutation, useQueryClient } from "@tanstack/react-query";
import accountService from "../../Services/accountService";


const useDeleteAccount=()=>
{
    const queryClient= useQueryClient();
    
    return useMutation({
        mutationFn:(accountid:number)=> accountService.delete(accountid),
        onSuccess:()=> {
            queryClient.invalidateQueries()
        }
    });
}

export default useDeleteAccount;