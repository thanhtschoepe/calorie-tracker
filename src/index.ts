import { AppDataSource } from "./data-source";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import "reflect-metadata";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  AppDataSource.initialize()
    .then(async () => {})
    .catch((error) => console.log(error));
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
