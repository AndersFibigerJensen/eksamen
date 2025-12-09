import { useMutation, useQueryClient } from "@tanstack/react-query"
import userService from "../../Services/userService";



const useDeleteUser=()=>
{
    const queryClient= useQueryClient();
    
    return useMutation({
        mutationFn:(userid:number)=> userService.delete(userid),
        onSuccess:()=> {
            queryClient.invalidateQueries()
        }
    });
}

export default useDeleteUser;