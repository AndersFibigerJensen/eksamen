import { Box, HStack } from "@chakra-ui/react"
import Textinput from "./formcomponents/TextInput"




const DateFilter = () => {

    return (
        <Box rounded={"md"}>
            <HStack>
                <Textinput isRequired={false} type="" label="datetime-local"/>
                <Textinput isRequired={false} type="" label="datetime-local"/>
            </HStack>
        </Box>
    )

}

export default DateFilter