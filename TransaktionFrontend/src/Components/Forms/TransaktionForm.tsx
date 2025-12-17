/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, HStack} from "@chakra-ui/react"
import Textinput from "../formcomponents/TextInput"
import { Link } from "react-router"
import { useState } from "react"
import CategorySelector from "../formcomponents/CategorySelector";
import StatusSelector from "../formcomponents/statusSelector";

interface TransaktionFormProps {
    initialValues:{
        transaktionid:number
        amount:number,
        description?:string|undefined;
        date: string;
        type: string;
        categoryIdCategory:number;
        accountIdAccount:number;
    },
    onSubmit:(values:any)=>void;
}

const TransaktionForm= ({initialValues,onSubmit}:TransaktionFormProps) => {
    const [formValues,setFormValues]= useState(initialValues)
    const handleChange = (field:string,value:string)=> {
        setFormValues((prev)=>({...prev,[field]:value}))
    }

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formValues)
        onSubmit(formValues);
    };
    
    return (
        <form onSubmit={handleSubmit}>
                    <Box display={"flex"} flexDirection={"column"}
      justifyContent={"center"} alignItems={"center"} height={"70vh"}>
            <Box width={"sm"} textAlign={"center"}>
                <Box>
                    <HStack>
                    <Textinput isRequired={true} type="number" label="amount"
                    onChange={(e)=>handleChange("amount",e.target.value)}/>
                    <Textinput isRequired={false} type="text" label="description"
                    onChange={(e)=>handleChange("description",e.target.value)}/>
                </HStack>
                </Box>
                    <Textinput isRequired={true} type='datetime-local'  label="date"
                    onChange={(e)=>handleChange("date",e.target.value)}/>
                <CategorySelector Onchange={(e)=>handleChange("categoryIdCategory",e.target.value)}/>
                <Box>
                    <StatusSelector/>
                </Box>
                <HStack alignItems={"center"} align={"center"} padding={5}>
                    <Button type="submit">add </Button>
                    <Button>
                        <Link to={"/"}>cancel </Link>
                    </Button>
                </HStack>
            </Box>
        </Box>
        </form>
    )

}

export default TransaktionForm