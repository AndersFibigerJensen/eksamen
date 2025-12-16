import { Box, Button, HStack} from "@chakra-ui/react";
import { Link } from "react-router";
import { UseAuth } from "../hooks/useAuth";


const Navbar = () => {

    const {isAuthenticated,logout}=UseAuth()
    console.log(isAuthenticated)


    return (
        <HStack spacing={"100px"} padding={"10px"} backgroundColor={"green.500"} >
        {isAuthenticated
    ? (
      <>
        <Box><Button><Link to="/AccountPage">Account</Link></Button></Box>
        <Box><Button><Link to="/transaktion">Transaktion</Link></Button></Box>
        <Box><Button onClick={logout}>logout</Button></Box>
      </>
    )
    : (<>
          <Box><Link to="/">Login</Link></Box>

    </>

    )
  }
        </HStack>
    )
}

export default Navbar;