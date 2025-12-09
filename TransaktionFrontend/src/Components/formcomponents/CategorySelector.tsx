import { Select } from "@chakra-ui/react";
import UseCategories from "../../hooks/getall/categoryshook";
import UseTransaktionlist from "../../queries/transaktion";


interface props {
    Onchange?: (e: React.ChangeEvent<HTMLOptionElement>) => void;
}


const categorySelect:React.FC<props>  = ({Onchange}) => {
    const {data}=UseCategories();
    const setValues= UseTransaktionlist((s)=>s.setCategory)
    return (
        <Select padding={2}>
            {data?.results.map((category)=>(
                <option key={category.idCategory} onClick={()=>setValues(category.idCategory)} onChange={Onchange}>
                    {category.name}
                </option>
            ))}
        </Select>
    )
}

export default categorySelect;