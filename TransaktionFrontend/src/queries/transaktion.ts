import {create} from "zustand"
import type { Account } from "../Services/accountService"

export interface TransaktionQuery 
{
    Account?: Account;
    category?:number;
    sortorder?:string;
    datehigh?:string;
    datelow?:string;
    pagesize?:number;
}

interface Transaktions {
    transaktionQuery:TransaktionQuery;
    setAccount:(Account?:Account)=> void;
    setCategory:(category?:number)=>void;
    setSortOrder:(sortOrder?:string)=>void;
    setPageSize:(pagesize?:number)=>void;
}

const useTransaktionlist=create<Transaktions>((set)=>
({
    transaktionQuery:{},

    setAccount:(account)=>
        set((state)=>
    ({
        transaktionQuery:{...state.transaktionQuery,account}
    })),

    setCategory:(category)=>
        set((state)=>
        ({
            transaktionQuery:{...state.transaktionQuery,category}   
        })),
    
    setSortOrder:(sortorder)=>
        set((state)=>
        ({
            transaktionQuery:{...state.transaktionQuery,sortorder}
        })),
    setPageSize:(pagesize)=>
        set((state)=>({
            transaktionQuery:{...state.transaktionQuery,pagesize}
        }))
    
    
}))

export default useTransaktionlist

