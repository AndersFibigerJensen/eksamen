"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Account_1 = require("../output/entities/Account");
const data_source_1 = require("../data-source");
const AccountRouter = (0, express_1.Router)();
const AccountRepository = data_source_1.AppDataSource.getRepository(Account_1.Account);
AccountRouter.get("/", async (req, res) => {
    const querybuilder = AccountRepository.createQueryBuilder("account")
        .leftJoinAndSelect("account.userIdUser2", "user")
        .leftJoinAndSelect("account.transaktions", "transaktion");
    const accounts = await querybuilder.getMany();
    const modifiedAccounts = accounts.map((account) => ({
        ...account,
        User: account.userIdUser2,
        transaktions: account.transaktions
    }));
    const response = {
        count: accounts.length,
        results: modifiedAccounts,
    };
    res.json(response);
});
exports.default = AccountRouter;
//# sourceMappingURL=accountRouter.js.map