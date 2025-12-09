"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const dbConnectMysql = async () => {
    try {
        await data_source_1.AppDataSource.initialize();
        console.log("Connected to MySQL database");
    }
    catch (error) {
        console.log("Error connecting to MySQL database", error);
    }
};
exports.default = dbConnectMysql;
//# sourceMappingURL=dbConnection.js.map