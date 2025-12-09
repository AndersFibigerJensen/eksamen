"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbConnection_1 = __importDefault(require("./dbConnection"));
const setupRouters_1 = __importDefault(require("./setupRouters"));
const init = (app) => {
    app.use((0, cors_1.default)()); // Enable CORS for all requests to the server
    app.use(express_1.default.json()); // Enable JSON parsing for all requests to the server
    (0, dbConnection_1.default)(); // Connect to the MySQL database
    (0, setupRouters_1.default)(app); // Setup all routers for the server
};
exports.default = init;
//# sourceMappingURL=init.js.map