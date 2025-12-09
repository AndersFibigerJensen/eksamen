import { useQuery } from "@tanstack/react-query";
import type { Category } from "../../Services/categoryService";
import { type Response } from "../../Services/api-client";
import categoryService from "../../Services/categoryService";



const UseCategories=() => 
    useQuery<Response<Category>,Error>({
        queryKey: ["categories"],
        queryFn: categoryService.getAll,
        
    });

export default UseCategories