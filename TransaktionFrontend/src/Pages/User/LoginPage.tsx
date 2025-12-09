import { Box, Button, HStack} from "@chakra-ui/react";
import Textinput from "../../Components/formcomponents/TextInput";
import { Link } from "react-router-dom";
import UseLogin from "../../hooks/useLogin";
import { useState } from "react";




const LoginPage = () => {
  const {mutate}= UseLogin()
    const [values, setValues] = useState({
    username: "",
    password: "",
  });
    const handleChange = (field: "username" | "password") => 
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
        <Textinput isRequired={true} type="text" label="username" onChange={handleChange("username")} />
        <Textinput isRequired={true} type="text" label="password" onChange={handleChange("password")}/>
      </Box>
      <HStack>
        <Button onClick={()=>mutate(values)}> login </Button>
        <Box><Link to={"/register"}>register</Link></Box>
      </HStack>

    </Box>
    </form>

  )
}

export default LoginPage;