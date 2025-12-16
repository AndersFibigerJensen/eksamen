import UseGoals from "../hooks/getall/goalshook";
import { Box, Button, Grid, GridItem, HStack, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import CenterBox from "./CenterBox";
import { Link } from "react-router-dom";



const GoalList = () => {
     const {data}=UseGoals()
     
    return (
        <Grid>
            <GridItem>
            <Box padding={10}>
            <CenterBox>
            <Table backgroundColor={"green.700"} variant={"simple"}  border="10px" borderColor={"blue.700"} boxSize={"lg"}>
                <Thead>
                    <Tr>
                        <Th>name</Th>
                        <Th>currentAmount</Th>
                        <Th>targetamount</Th>
                        <Th>status</Th>
                        <Th>functions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {data?.results.map((g)=>
                        <Tr key={g.idGoal}>
                            <Td>{g.name}</Td>
                            <Td>{g.currentAmount}</Td>
                            <Td>{g.targetAmount}</Td>
                            <Td>{g.status}</Td>
                            <Td>
                                <HStack>
                                        <Link to={`/DeleteGoal/${g.idGoal}`}>
                                        <Button colorScheme="red" size="sm">Delete</Button>
                                        </Link>
                                        <Link to={`/EditGoal/${g.idGoal}`}>
                                        <Button colorScheme="red" size="sm">Update</Button>
                                        </Link>
                                </HStack>
                            </Td>
                        </Tr>
                        )}
                </Tbody>

            </Table>
            </CenterBox>

        </Box>
            </GridItem>
        </Grid>


    );
};

export default GoalList;