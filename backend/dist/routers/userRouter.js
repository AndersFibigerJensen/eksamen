"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../output/entities/User");
const data_source_1 = require("../data-source");
const UserService_1 = require("../services/UserService");
const UserRouter = (0, express_1.Router)();
const UserRepository = data_source_1.AppDataSource.getRepository(User_1.User);
UserRouter.get("/", async (req, res) => {
    const users = await UserRepository.find();
    const response = {
        count: users.length,
        results: users
    };
    res.json(response);
});
UserRouter.get("/:username/:password", async (req, res) => {
    const username = req.params.username;
    const password = req.params.password;
    try {
        const user = await (0, UserService_1.GetUser)(username, password);
        if (user) {
            res.send(user);
        }
        else {
            res.status(404).send({ error: "transaktion not found" });
        }
    }
    catch (error) {
        res.status(500).send({ error: "failed to fetch transaktion" });
    }
});
UserRouter.delete("/:id", async (req, res) => {
    const userid = Number(req.params.id);
    try {
        await (0, UserService_1.deleteUserById)(userid);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).send({ error: " failed to delete user" });
    }
});
UserRouter.post("/", async (req, res) => {
    const userdata = req.body;
    try {
        await (0, UserService_1.createUser)(userdata);
        res.json(userdata);
        res.status(201).send();
    }
    catch (error) {
        res.status(201).send({ error: "failed to add user" });
    }
});
UserRouter.put("/:id", async (req, res) => {
    const userid = Number(req.params.id);
    const userdata = req.body;
    try {
        await (0, UserService_1.updateUser)(userid, userdata);
        res.json(userdata);
        res.status(201).send();
    }
    catch (error) {
        res.status(400).send({ error: "failed to add user" });
    }
});
exports.default = UserRouter;
//# sourceMappingURL=userRouter.js.map