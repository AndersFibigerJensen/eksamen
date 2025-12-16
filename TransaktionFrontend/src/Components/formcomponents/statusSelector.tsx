import { Select } from "@chakra-ui/react"


interface props {
    Onchange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


const statusSelector:React.FC<props> = ({Onchange}) => {
    return(
        <Select onChange={Onchange}>
            <option>income</option>
            <option>expense</option>
        </Select>
    )

}
export default statusSelector