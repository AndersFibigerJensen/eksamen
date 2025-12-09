import { useQuery } from "@tanstack/react-query";
import userService from "../../Services/userService";

const useUser=(id:number)=>
    useQuery({
        queryKey:["user",id],
        queryFn:()=> userService.get(id)
    })

export default useUser

