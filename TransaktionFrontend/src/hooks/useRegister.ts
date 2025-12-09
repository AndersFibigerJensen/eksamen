import { useMutation, useQueryClient } from "@tanstack/react-query";
import userService, { type User } from "../Services/userService";


const UseRegister=() => 
{
    const queryclient= useQueryClient();
    return useMutation({
        mutationFn:(data:Partial<User>)=>userService.register(data),
        onSuccess:()=> {
            queryclient.invalidateQueries({queryKey:["goal"]})
        }
    })
}

export default UseRegister