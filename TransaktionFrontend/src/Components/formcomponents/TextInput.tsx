import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import type React from "react";

interface TextinputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired: boolean;
    type: string;
    label:string;
}

const Textinput:React.FC<TextinputProps> = ({
    onChange,
    isRequired,
    label,
    type
}) => {
    return (
        <FormControl isRequired={isRequired} borderRadius={"15"}>
            <FormLabel>{label} </FormLabel>
                <Input onChange={onChange} backgroundColor={"blue.600"} type={type}/>
        </FormControl>
    )   
}

export default Textinput;