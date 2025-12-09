import { useQuery } from "@tanstack/react-query";
import { type Response } from "../../Services/api-client";
import type { goal } from "../../Services/goalService";
import goalService from "../../Services/goalService";


const UseGoals=() => 
    useQuery<Response<goal>,Error>({
        queryKey: ["categories"],
        queryFn: goalService.getAll,
        
    });

export default UseGoals