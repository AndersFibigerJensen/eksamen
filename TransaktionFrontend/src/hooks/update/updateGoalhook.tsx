import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { goal } from "../../Services/goalService"
import goalService from "../../Services/goalService"


const useUpdateGoal=()=>
{
    const queryclient= useQueryClient();
    return useMutation({
        mutationFn:(data:Partial<goal>)=>goalService.update(String(data.idGoal),data),
        onSuccess:()=> {
            queryclient.invalidateQueries({queryKey:["Goals"]})
        }
    })
}

export default useUpdateGoal