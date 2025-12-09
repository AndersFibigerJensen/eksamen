import { Card,CardBody,CardHeader } from "@chakra-ui/react/card"
import UseGoal from "../../hooks/getbyhook/goalhook"

interface Props
{
    id:number
}

const goalCard = ({id}:Props) => 
{
    const goal = UseGoal(id)
    return (
        <Card>
            <CardHeader backgroundColor={"green.600"}>
                {goal.data?.status}
            </CardHeader>
            <CardBody backgroundColor={"blue.700"}>
                {goal.data?.name}
            </CardBody>
        </Card>
    )
}

export default goalCard


