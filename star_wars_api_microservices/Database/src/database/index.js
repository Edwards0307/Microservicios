import mongoose from "mongoose";
import { MONGO_URI } from "../config/envs.js";
import characterSchemas from "./schemas/characterSchemas.js";
import filmSchemas from "./schemas/filmSchemas.js";
import planetSchemas from "./schemas/planetSchemas.js";

const conn = mongoose.createConnection(MONGO_URI);

const Characters = conn.model("Character", characterSchemas);
const Films = conn.model("Films", filmSchemas);
const Planets = conn.model("Planets", planetSchemas);

Characters.find()
  .populate("films", ["_id", "title"])
  .then((res) => console.log(res[0]));
