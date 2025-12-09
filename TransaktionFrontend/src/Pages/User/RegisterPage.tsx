import { Box, Button, HStack } from "@chakra-ui/react";
import Textinput from "../../Components/formcomponents/TextInput";
import { Link } from "react-router-dom";
import UseRegister from "../../hooks/useRegister";
import { useState } from "react";




const RegisterPage = () => {
    const {mutate}= UseRegister()
    const [values, setValues] = useState({
    username: "",
    password: "",
    email:"",
    createdAt:new Date().toISOString().split("T")[0]
  });
    const handleChange = (field: "username" | "password"|"email") => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues(prev => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
  return (
    <form>
    <Box display={"flex"} flexDirection={"column"}
      justifyContent={"center"} alignItems={"center"} height={"70vh"}>
      <Box textAlign={"center"} width={"sm"}>
        <Textinput isRequired={true} type="text" label="username" onChange={handleChange("username")}/>
        <Textinput isRequired={true} type="text" label="password" onChange={handleChange("password")}/>
        <Textinput isRequired={true} type="text" label="email" onChange={handleChange("email")} />
      </Box>
      <HStack>
        <Button onClick={()=>mutate(values)}>register </Button>
        <Box><Link to={"/"}>cancel</Link></Box>
      </HStack>

    </Box>
    </form>

  )
}

export default RegisterPage;