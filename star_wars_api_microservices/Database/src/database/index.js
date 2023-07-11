import mongoose from "mongoose";
import { MONGO_URI } from "../config/envs.js";
import characterSchemas from "./schemas/characterSchemas.js";
import filmSchemas from "./schemas/filmSchemas.js";
import planetSchemas from "./schemas/planetSchemas.js";

const conn = mongoose.createConnection(MONGO_URI);

const store = {
  Characters: conn.model("Characters", characterSchemas),
  Films: conn.model("Films", filmSchemas),
  Planets: conn.model("Planets", planetSchemas),
};

export default store;