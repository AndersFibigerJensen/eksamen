import { Router } from "express";
import { Account } from "../output/entities/Account";
import { AppDataSource } from "../data-source";
import { Transaktion } from "../output/entities/Transaktion";

interface ModifiniedAccount {
    idAccount: number
    name: string;
    saldo: number;
    userIdUser: number;
    transaktions:Transaktion[];
}

interface Response {
    count: number;
    results: ModifiniedAccount[];
}

const AccountRouter= Router();

const AccountRepository = AppDataSource.getRepository(Account);

AccountRouter.get("/", async (req, res) => {
    const querybuilder= AccountRepository.createQueryBuilder("account")
    .leftJoinAndSelect("account.userIdUser2", "user")
    .leftJoinAndSelect("account.transaktions", "transaktion"); 
    const accounts = await querybuilder.getMany();
    const modifiedAccounts = accounts.map((account) => ({ 
        ...account,
        User: account.userIdUser2,
        transaktions:account.transaktions
    }));

    const response: Response = {
        count: accounts.length,
        results: modifiedAccounts,   
    };
    res.json(response);
});

export default AccountRouter;