import { useQuery } from "@tanstack/react-query";
import type {budget } from "../../Services/budgetService";
import { type Response } from "../../Services/api-client";
import budgetService from "../../Services/budgetService";
import useBudgetlist from "../../queries/budget";


const UseBudgets=() => {
    const BudgetQuery= useBudgetlist((s)=>s.budgetQuery)
    const simpleQuery= {
        ...BudgetQuery,
        userId:BudgetQuery.userId,
        CategoryId:BudgetQuery.categoryid
    }

        return useQuery<Response<budget>,Error>({
        queryKey: ["budgets",simpleQuery],
        queryFn:() => budgetService.getAll({
            params:{
                userId:BudgetQuery.userId,
                CategoryId:BudgetQuery.categoryid,
                pagesize:BudgetQuery.pageSize,
                userid: BudgetQuery.userId
            },
        })
    });
} 


export default UseBudgets