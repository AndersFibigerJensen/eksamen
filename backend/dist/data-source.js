"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "123456",
    database: "mydb",
    synchronize: true,
    logging: true,
    entities: ["output/entities/*.ts"],
    migrations: [],
    subscribers: [],
    connectTimeout: 10000,
});
//# sourceMappingURL=data-source.js.map