import mongoose from "mongoose";
import { MONGO_URI } from "../config/envs.js";
import characterSchemas from "./schemas/characterSchemas.js";

const conn = mongoose.createConnection(MONGO_URI);

const Characters = conn.model("Character", characterSchemas);

Characters.find().then((res) => console.log(res));
