import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { Category } from "../../Services/categoryService"
import categoryService from "../../Services/categoryService"


const useUpdateCategory=()=>
{
    const queryclient= useQueryClient();
    return useMutation({
        mutationFn:(data:Partial<Category>)=>categoryService.update(Number(data.idCategory),data),
        onSuccess:()=> {
            queryclient.invalidateQueries({queryKey:["categories"]})
        }
    })
}

export default useUpdateCategory