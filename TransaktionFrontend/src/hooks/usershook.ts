import { useQuery } from "@tanstack/react-query";
import userService from "../Services/userService";
import type { User } from "../Services/userService";
import { type Response } from "../Services/api-client";



const UseUsers=() => 
    useQuery<Response<User>,Error>({
        queryKey: ["users"],
        queryFn: userService.getAll,
        
    });

export default UseUsers
