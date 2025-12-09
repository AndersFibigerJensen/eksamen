import { Grid, GridItem } from "@chakra-ui/react"
import BudgetList from "../Components/BudgetList";
import TransaktionList from "./TransaktionList";
import CategorySelector from "../Components/CategorySelector";



const AccountPage = () => {
    return (
        <Grid templateAreas={{base:`"main"`,lg:`"aside main"`}}
        gridTemplateColumns={{base:"1fr",lg:"50px 1fr"}}>
            <GridItem area={"aside"} justifyContent={"center"} textAlign={"center"} paddingBlockStart={5} padding={5}>
                <CategorySelector/>
            </GridItem>
            <GridItem area={"main"} pl={2}>
                <BudgetList/>
                <TransaktionList/>
            </GridItem>

        </Grid>
    )
}
export default AccountPage;