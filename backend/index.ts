import express from "express";
import init from "./init";
import dotenv from "dotenv";
import path from "path";

dotenv.config()


const app = express();
init(app);

app.get("/", (req, res) => {
res.send("Hello World!");
});

app.listen(3306, () => {
console.log("Server is running on http://localhost:3306");
});