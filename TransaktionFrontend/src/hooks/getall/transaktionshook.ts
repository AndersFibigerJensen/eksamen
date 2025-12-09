import type { Transaktion } from "../../Services/transaktionService";
import transaktionService from "../../Services/transaktionService";
import { useQuery } from "@tanstack/react-query";
import { type Response } from "../../Services/api-client";
import useTransaktionlist from "../../queries/transaktion";


const UseTransaktions=() =>{
    const transaktionQuery= useTransaktionlist((s)=>s.transaktionQuery)
    const simpleQuery = {
        ...transaktionQuery,
        categoryId:transaktionQuery.category,
        accountId:transaktionQuery.Account?.idAccount,
        pagesize:transaktionQuery.pagesize   
    };

         return useQuery<Response<Transaktion>,Error>({
        queryKey: ["transactions",simpleQuery],
        queryFn:()=>transaktionService.getAll({
            params:{
                categoryId:transaktionQuery.category,
                accountId:transaktionQuery.Account?.idAccount
            },
        }),
    });
}





export default UseTransaktions