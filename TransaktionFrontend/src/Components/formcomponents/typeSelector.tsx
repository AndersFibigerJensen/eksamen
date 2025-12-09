import { Select } from "@chakra-ui/react"
import type React from "react";

interface props {
    Onchange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const typeSelector:React.FC<props> = ({Onchange}) => {
    return (
        <Select onChange={Onchange}>
            <option>income</option>
            <option>expense</option>
        </Select>

    )

}

export default typeSelector