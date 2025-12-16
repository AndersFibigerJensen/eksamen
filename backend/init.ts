import express from "express";
import cors from "cors";
import dbConnectMysql from "./dbConnection";
import setupRouters from "./setupRouters";


const init = (app: express.Application) => {
app.use(cors({
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
})); // Enable CORS for all requests to the server
app.use(express.json()); // Enable JSON parsing for all requests to the server
dbConnectMysql(); // Connect to the MySQL database
setupRouters(app); // Setup all routers for the server
};

export default init;