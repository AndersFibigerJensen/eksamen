import { Box, Button, HStack} from "@chakra-ui/react";
import Textinput from "../formcomponents/TextInput";
import { useState } from "react";
import { Link } from "react-router";


interface props {
    initialValues:{
        username:string;
        password:string;
        email:string;
        created_at:string
    },
    onSubmit:(values:unknown)=>void;
}

const UserForm = ({initialValues,onSubmit}:props) => {
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
    <Box display={"flex"} flexDirection={"column"}
      justifyContent={"center"} alignItems={"center"} height={"70vh"}>
      <Box textAlign={"center"} width={"sm"}>
        <Textinput isRequired={true} type="text" label="username" value={""}  onChange={(e)=>handleChange("date",e.target.value)} />
        <Textinput isRequired={true} type="text" label="password" value={""}  onChange={(e)=>handleChange("date",e.target.value)} />
        <Textinput isRequired={true} type="text" label="email" value={""}  onChange={(e)=>handleChange("date",e.target.value)} />
      </Box>
      <HStack>
        <Button>register </Button>
        <Box><Link to={"/"}>cancel</Link></Box>
      </HStack>

    </Box>
    </form>
        )
}

export default UserForm;