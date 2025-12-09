import { List, ListItem } from "@chakra-ui/react";
import UseAccounts from "../hooks/getall/accountshook";




const AccountList = () => {
    const {data: Accounts}= UseAccounts()
    return (
        <List>
            {Accounts?.results.map((Accounts) => (  
                <ListItem key={Accounts.idAccount}>{Accounts.name},{Accounts.saldo}</ListItem>
            ))}
        </List>
    );
};

export default AccountList;