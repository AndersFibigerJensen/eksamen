import UseGoals from "../hooks/getall/goalshook";
import { Box, Button, Grid, GridItem, HStack, Input, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";



const GoalList = () => {
     const {data}=UseGoals()
     
    return (
        <Grid>
            <GridItem>
            <Box>
            <Box padding={1}>
                <HStack padding={5}>
                    <Input backgroundColor={"blue.600"} htmlSize={25} width='auto' type="datetime-local"/>
                    <Input backgroundColor={"blue.600"} htmlSize={25} width='auto' type="datetime-local"/>
                    <Button>add</Button>
                </HStack>
            </Box>
            <Table backgroundColor={"green.700"} variant={"simple"}  border="10px" borderColor={"blue.700"}>
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
                                    <Button>update</Button>
                                    <Button>Delete</Button>
                                </HStack>
                            </Td>
                        </Tr>
                        )}
                </Tbody>

            </Table>
        </Box>
            </GridItem>
        </Grid>


    );
};

export default GoalList;