import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import UseCategories from "../hooks/getall/categoryshook"
import useTransaktionlist from "../queries/transaktion"



const CategorySelector=() => {
    const {data,error}=UseCategories()
    const setValues = useTransaktionlist((s)=>s.setCategory)
    if(error) return null
    return (
        <Menu>
            <MenuButton textAlign={"center"} backgroundColor={"blue"}>button</MenuButton>
            <MenuList>
                <MenuItem onClick={()=>setValues(undefined)}>
                 clear
                </MenuItem>
                {data?.results.map((category)=>(
                    <MenuItem key={category.idCategory} onClick={()=> setValues(category.idCategory)}>
                        {category.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default CategorySelector