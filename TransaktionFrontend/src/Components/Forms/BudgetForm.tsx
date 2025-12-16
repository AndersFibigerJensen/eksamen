/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, FormControl, FormLabel, HStack, Input } from "@chakra-ui/react";
import CenterBox from "../CenterBox";
import type { User } from "../../Services/userService";
import type { Category } from "../../Services/categoryService";
import { useState } from "react";
import CategorySelector from "../formcomponents/CategorySelector";

interface props {
    initialValues:{
        amount?:number;
        budgetDate?:string|null;
        categoryIdCategory?:number;
        userIdUser?:number;
        CategoryIdCategory2?:Category;
        userIdUser2?:User;
    },
    onSubmit:(values:any)=>void;
}


const BudgetForm = ({initialValues,onSubmit}:props) => {

        const [formValues,setFormValues]= useState(initialValues)
        const handleChange = (field:string,value:string)=> {
            setFormValues((prev)=>({...prev,[field]:value}))
        }
    
            const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            onSubmit(formValues);
        };

    return(
        <form onSubmit={handleSubmit}>
            <CenterBox>
                <HStack>
                    <FormControl isRequired={true} borderRadius={"15"}>
                        <FormLabel>amount </FormLabel>
                            <Input backgroundColor={"blue.600"} onChange={(e)=>handleChange("date",e.target.value)}/>
                    </FormControl>
                    <FormControl isRequired={true} borderRadius={"15"}>
                        <FormLabel>budgetdate </FormLabel>
                            <Input backgroundColor={"blue.600"} onChange={(e)=>handleChange("date",e.target.value)}
                            type="datetime-local"/>
                    </FormControl>
                </HStack>
                <HStack>
                    <CategorySelector></CategorySelector>         
                </HStack>
                <HStack padding={5}>
                    <Button>add</Button>
                    <Button>cancel</Button>
                </HStack>
            </CenterBox>
        </form>
    )
}

export default BudgetForm;