import { Card,CardBody,CardHeader } from "@chakra-ui/react/card"
import UseBudget from "../../hooks/getbyhook/budgethook"

interface Props
{
    id:number
}

const BudgetCard = ({id}:Props) => 
{
    const budget = UseBudget(id)
    return (
        <Card>
            <CardHeader backgroundColor={"green.600"}>
                {budget.data?.budgetDate}
            </CardHeader>
            <CardBody backgroundColor={"blue.700"}>
                {budget.data?.amount}
            </CardBody>
        </Card>
    )
}

export default BudgetCard