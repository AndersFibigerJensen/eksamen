"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthService_1 = require("../services/AuthService");
const authRouter = (0, express_1.Router)();
authRouter.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await AuthService_1.AuthService.login(username, password);
        res.send(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
authRouter.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await AuthService_1.AuthService.register(username, password);
        res.send(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.default = authRouter;
//# sourceMappingURL=authRouter.js.map