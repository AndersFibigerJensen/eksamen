import { useQuery } from "@tanstack/react-query";
import { type Response } from "../../Services/api-client";
import budgetService, { type budget } from "../../Services/budgetService";



const UseBudgets=() => 
    useQuery<Response<budget>,Error>({
        queryKey: ["budgets"],
        queryFn: budgetService.getAll,
        
    });

export default UseBudgets