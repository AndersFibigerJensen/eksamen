import { Card, CardBody, CardHeader } from "@chakra-ui/react"
import useTransaktion from "../../hooks/getbyhook/transaktionhook"

interface Props
{
    id:number
}

const TransaktionCard = ({id}:Props) => 
{
    const user = useTransaktion(id)
    return (
        <Card >
            <CardHeader backgroundColor={"green.600"} borderRadius={15}>
                {user.data?.categoryIdCategory2.name}
            </CardHeader>
            <CardBody backgroundColor={"blue.700"} borderRadius={15}>
                {user.data?.amount}
            </CardBody>
        </Card>
    )
}

export default TransaktionCard