import { useQuery } from "@tanstack/react-query"
import transaktionService from "../../Services/transaktionService"



const useTransaktion=(id:number)=>
    useQuery({
        queryKey:["transactions",id],
        queryFn:()=> transaktionService.get(id)
    })

export default useTransaktion