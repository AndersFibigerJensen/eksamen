import { List, ListItem } from "@chakra-ui/react/list";
import UseGoals from "../hooks/getall/goalshook";


const GoalList = () => {
     const {data}=UseGoals()

    return (
        <List>
            {data?.results.map((Goal) => (
                <ListItem key={Goal.idGoal}>{Goal.status},{Goal.currentAmount},{Goal.targetAmount}</ListItem>
            ))}
        </List>
    );
};

export default GoalList;