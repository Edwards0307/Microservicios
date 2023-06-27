import express, { json } from "express";
import morgan from "morgan";

const server = express();

server.use(morgan("dev"));
server.use(json());

export default server