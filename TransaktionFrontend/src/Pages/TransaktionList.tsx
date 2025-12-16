import { Box, Button, HStack, Input, Table, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import UseTransaktions from "../hooks/getall/transaktionshook";


const TransaktionList = () => {
    const {data: Transkaktions}= UseTransaktions()

    return (
                <Box>
                    <Box padding={1}>
                        <HStack padding={5}>
                            <Input backgroundColor={"blue.600"} htmlSize={25} width='auto' type="datetime-local"/>
                            <Input backgroundColor={"blue.600"} htmlSize={25} width='auto' type="datetime-local"/>
                        </HStack>
                    </Box>
                    <Table size={"lg"}>
                        <Thead>
                        </Thead>
                        <Tbody>
                            {Transkaktions?.results.map((b)=>
                            <Tr key={b.idTransaktion}>
                                <Td>
                                    {b.amount}
                                </Td>
                                <Td>
                                    {b.date}
                                </Td>
                                <Td>
                                    {b.type}
                                </Td>
                                <Td>
                                    {b.categoryIdCategory2.name}
                                </Td>
                                <Td>
                                    <HStack>
                                        <Button>update</Button>
                                        <Button>delete</Button>
                                    </HStack>
                                </Td>
                            </Tr> )}
                        </Tbody>
                    </Table>
                </Box>
            )};

export default TransaktionList;