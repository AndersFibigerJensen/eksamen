import { useQuery } from "@tanstack/react-query";
import type { Account } from "../../Services/accountService";
import accountService from "../../Services/accountService";
import { type Response } from "../../Services/api-client";




const UseAccounts=() =>  
    useQuery<Response<Account>,Error>({
        queryKey: ["accounts"],
        queryFn: ()=> accountService.getAll({ })
        
    });

export default UseAccounts