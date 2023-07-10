import mongoose from "mongoose";
import { MONGO_URI } from "../config/envs.js";
import characterSchemas from "./schemas/characterSchemas.js";
import filmSchemas from "./schemas/filmSchemas.js";
import planetSchemas from "./schemas/planetSchemas.js";

const conn = mongoose.createConnection(MONGO_URI);

export const Characters = conn.model("Characters", characterSchemas);
export const Films = conn.model("Films", filmSchemas);
export const Planets = conn.model("Planets", planetSchemas);
