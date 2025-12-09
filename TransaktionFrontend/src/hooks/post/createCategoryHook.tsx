import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { Category } from "../../Services/categoryService"
import categoryService from "../../Services/categoryService"




const useCreateCategory=()=>
{
    const queryclient= useQueryClient();
    return useMutation({
        mutationFn:(data:Partial<Category>)=>categoryService.create(data),
        onSuccess:()=> {
            queryclient.invalidateQueries({queryKey:["category"]})
        }
    })
}

export default useCreateCategory