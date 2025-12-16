import { Box, Button, HStack, Input, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import UseTransaktions from "../hooks/getall/transaktionshook";
import { Link } from "react-router";


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
                            <Th>amount </Th>
                            <Th>date </Th>
                            <Th>type of income</Th>
                            <Th>category </Th>
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
                                        <Link to={`/TransaktionDelete/${b.idTransaktion}`}>
                                        <Button colorScheme="red" size="sm">Delete</Button>
                                        </Link>
                                        <Link to={`/TransaktionEdit/${b.idTransaktion}`}>
                                        <Button colorScheme="red" size="sm">Update</Button>
                                        </Link>
                                    </HStack>
                                </Td>
                            </Tr> )}
                        </Tbody>
                    </Table>
                </Box>
            )};

export default TransaktionList;