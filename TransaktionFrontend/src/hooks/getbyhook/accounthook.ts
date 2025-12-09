import { useQuery } from "@tanstack/react-query"
import accountService from "../../Services/accountService"


const useAccount=(id:number)=>
    useQuery({
        queryKey:["account",id],
        queryFn:()=> accountService.get(id)
    })

export default useAccount