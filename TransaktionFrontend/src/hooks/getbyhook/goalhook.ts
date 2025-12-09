import { useQuery } from "@tanstack/react-query"
import goalService from "../../Services/goalService"


const UseGoal=(id:number)=>
    useQuery({
        queryKey:["goal",id],
        queryFn:()=> goalService.get(id)
    })

export default UseGoal