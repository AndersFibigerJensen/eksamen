import { Box, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Textinput from "../formcomponents/TextInput";
import { useState } from "react";


interface goalvalues {
        id:number,
        name:string|null,
        targetamount:number|null;
        currentamount:number|null;
        status: string|null;
        userIdUser:number;
}

interface props {
    initialValues: goalvalues;
    onSubmit: (values: goalvalues) => void;
}

const GoalForm = ({initialValues,onSubmit}:props) => {
    
            const [formValues,setFormValues]= useState(initialValues)
            const handleChange = (field:string,value:string)=> {
                setFormValues((prev)=>({...prev,[field]:value}))
            }
        
                const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                onSubmit({...formValues});
            };

        return(
            <form onSubmit={handleSubmit}>
            <Box display={"flex"} flexDirection={"column"}
      justifyContent={"center"} alignItems={"center"}>
            <Box width={"sm"}>
                <HStack>
                    <Textinput isRequired={true} type="text" label="name" onChange={(e)=>handleChange("name",e.target.value)}/>
                    <Textinput isRequired={true} type="text" label="name" onChange={(e)=>handleChange("targetDate",e.target.value)}/>
                </HStack>
                <HStack>
                    <Button type="submit">add </Button>
                    <Link to={"/"}>cancel </Link>
                </HStack>
            </Box>
        </Box>
            </form>
    )
}

export default GoalForm;