import { response, Router } from "express";
import { Category } from "../output/entities/Category";
import { AppDataSource } from "../data-source";
import { Transaktion } from "../output/entities/Transaktion";
import { deleteCategory, GetCategories, GetCategory, updateCategory } from "../services/CategoryService";

interface ModifiniedCategory {
    idCategory: number;
    name: string;
    type: string;
    transaktions:Transaktion[];
}

export const DEFAULT_PAGE_SIZE=100;
export const START_PAGE=1;
export const Max_Page_size=100;


interface Response {
    count: number;
    next: string|null;
    results: ModifiniedCategory[];
}

const buildCategoriesResponse= (
    Categories:ModifiniedCategory[],
    total:number|bigint,
    req:any
): Response => {
    const page = req.query.page ? Number(req.query.page) : START_PAGE;
    let size= req.query.pagesize
    ? Number(req.query.pagesize) :DEFAULT_PAGE_SIZE

    if(size>Max_Page_size) {
        size= Max_Page_size
    }

    const numericTotal = typeof total === "bigint" ? Number(total) : total;

    const toalPages= Math.ceil(numericTotal/size)

    return {
        count:numericTotal,
        next:
        page<toalPages ?
        `${process.env.Server_URL}/Categories?page=
        ${page+1}&pagesize=${size}`: null,
        results:Categories
    }

}

const CategoryRouter= Router();

const CategoryRepository = AppDataSource.getRepository(Category);

CategoryRouter.get("/", async (req, res) => { 
    const {results,count}= await GetCategories(req)
    const Response:Response = buildCategoriesResponse(results,count,req)
    res.send(Response)
})

CategoryRouter.get("/:id",async(req,res)=>
{
    const categoryid=req.params.id;
    try {
        const category= await GetCategory(Number(categoryid));
        if(category) {
            res.send(category)
        }
        else {
            res.status(404).send({error:"category not found"})
        }
    }
    catch(error) {
        res.status(500).send({error:"failed to fetch category"})
    }
});

CategoryRouter.delete("/:id",async (req,res)=>
{
    const categoryId= Number(req.params.id)
    try {
        await deleteCategory(categoryId);
        res.status(204).send()
    } catch (error)
    {
        res.status(500).send
        ({error:" failed to delete category"})
    }
});

CategoryRouter.post("/",async (req,res)=>
{
    const categoryData= req.body;
    try {
        const newCategory= CategoryRepository.create(categoryData);
        const savedCategory= await CategoryRepository.save(newCategory);
        res.status(201).send(savedCategory);
    } catch(error) {
        res.status(500).send({error:"failed to create category"})
    }
});

CategoryRouter.put("/:id",async (req,res)=>
{
    const categoryid= Number(req.params.id);
    const categoryData= req.body;
    try {
        const updatedCategory= await updateCategory(categoryid,categoryData);
        res.status(200).send(updatedCategory);
    }
    catch(error) {
        res.status(500).send({error:"failed to update category"})
    }
});

export default CategoryRouter;

