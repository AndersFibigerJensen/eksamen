import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface props
{
  children:ReactNode
}

const CenterBox:React.FC<props> = ({children}) => {
    return (
        <Box display={"flex"} flexDirection={"column"}
      justifyContent={"center"} alignItems={"center"} height={"70vh"}>
              {children}
        </Box>
    )

}

export default CenterBox;