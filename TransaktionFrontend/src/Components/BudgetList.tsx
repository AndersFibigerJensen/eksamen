import { Box, Button, HStack, Input, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import UseBudgets from "../hooks/getall/budgetshook";
import { Link } from "react-router";



const BudgetList = () => {

    const {data}= UseBudgets()
    console.log(data)
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
                    <Th>
                        <Tr>
                            <Th>amount you saved </Th>
                            <Th>The date you created</Th>
                            <Th>functions </Th>
                        </Tr>
                    </Th>
                    <Th> date you created</Th>
                    <Th>functions</Th>
                </Thead>
                <Tbody>
                    {data?.results.map((b)=>
                    <Tr key={b.idBudget}>
                        <Td>
                            {b.amount}
                        </Td>

                        <Td>
                            {b.budgetDate}
                        </Td>
                        <Td>
                            {b.CategoryIdCategory2?.name}
                        </Td>
                        <Td>
                            <HStack>
                                <Link to={`/EditGoal/${b.idBudget}`}>
                                <Button colorScheme="red" size="sm">Update</Button>
                                </Link>
                                <Link to={`/EditGoal/${b.idBudget}`}>
                                <Button colorScheme="red" size="sm">Update</Button>
                                </Link>
                            </HStack>
                        </Td>
                    </Tr> )}
                </Tbody>
            </Table>
        </Box>
    );
};

export default BudgetList;