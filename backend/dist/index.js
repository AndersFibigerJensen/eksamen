"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const init_1 = __importDefault(require("./init"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.resolve(process.cwd(), ".env")
});
console.log("Loaded JWT:", process.env.JWT_SECRET);
const app = (0, express_1.default)();
(0, init_1.default)(app);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(3306, () => {
    console.log("Server is running on http://localhost:3306");
});
//# sourceMappingURL=index.js.map