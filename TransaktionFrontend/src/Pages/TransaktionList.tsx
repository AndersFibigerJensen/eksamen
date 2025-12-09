import { Box, List, ListItem } from "@chakra-ui/react";
import UseTransaktions from "../hooks/getall/transaktionshook";
import TransaktionCard from "../Components/cards/TransaktionCard";
import CategorySelector from "../Components/CategorySelector";


const TransaktionList = () => {
    const {data: Transkaktions}= UseTransaktions()
    return (
        <><Box>
            <CategorySelector />
        </Box><List textAlign={"center"} padding={5} width={"container.lg"}>
                {Transkaktions?.results.map((Transaktion) => (
                    <ListItem borderRadius={15}>
                        <TransaktionCard id={Transaktion.idTransaktion} />
                    </ListItem>
                ))}
            </List></>
    );
};

export default TransaktionList;