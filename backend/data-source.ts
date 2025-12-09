import { url } from "inspector";
import "reflect-metadata";
import { DataSource } from "typeorm";

const URL= process.env.sql_database;

export const AppDataSource = new DataSource({
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