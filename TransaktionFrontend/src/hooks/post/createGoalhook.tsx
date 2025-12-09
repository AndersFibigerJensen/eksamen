import { useMutation,useQueryClient } from "@tanstack/react-query"
import type { goal } from "../../Services/goalService"
import goalService from "../../Services/goalService"




const useCreateGoal=()=>
{
    const queryclient= useQueryClient();
    return useMutation({
        mutationFn:(data:Partial<goal>)=>goalService.create(data),
        onSuccess:()=> {
            queryclient.invalidateQueries({queryKey:["goal"]})
        }
    })
}
    

export default useCreateGoal