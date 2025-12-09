import { List, ListItem} from "@chakra-ui/react";
import UseBudgets from "../hooks/getall/budgetshook";
import BudgetCard from "./cards/budgetCard";
import { UseAuth } from "../hooks/useAuth";
import useBudgetlist from "../queries/budget";


const BudgetList = () => {
    useBudgetlist((s)=>s.setUserId(user.id))
    const{user} =UseAuth()
    const {data: Budgets}= UseBudgets()

    return (
        <List padding={5} textAlign={"center"}>
            {Budgets?.results.map((Budgets) => (
                <ListItem key={Budgets.idBudget}>
                    <BudgetCard id={Budgets.idBudget}/>
                </ListItem>
                ))}
        </List>
    );
};

export default BudgetList;