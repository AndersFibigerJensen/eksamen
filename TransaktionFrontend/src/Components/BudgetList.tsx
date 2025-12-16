import { Box, HStack, Input, Table, Tbody, Td, Thead, Tr} from "@chakra-ui/react";
import UseBudgets from "../hooks/getall/budgetshook";
import { UseAuth } from "../hooks/useAuth";
import useBudgetlist from "../queries/budget";


const BudgetList = () => {

    const{user} =UseAuth()
    console.log(user)
    const {data: Budgets}= UseBudgets()
    useBudgetlist((s)=>s.setUserId(user.id))

    return (
        <Box>
            <Box padding={1}>
                <HStack padding={5}>
                    <Input backgroundColor={"blue.600"} htmlSize={25} width='auto' type="datetime-local"/>
                    <Input backgroundColor={"blue.600"} htmlSize={25} width='auto' type="datetime-local"/>
                </HStack>
            </Box>
            <Table>
                <Thead>
                </Thead>
                <Tbody>
                    {Budgets?.results.map((b)=>
                    <Tr key={b.idBudget}>
                        <Td>
                            {b.amount}
                        </Td>
                        <Td>
                            {b.budgetDate}
                        </Td>
                        <Td>
                            {b.CategoryIdCategory2.name}
                        </Td>
                    </Tr> )}
                </Tbody>
            </Table>
        </Box>

    );
};

export default BudgetList;