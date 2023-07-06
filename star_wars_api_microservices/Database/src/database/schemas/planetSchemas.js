import { Schema } from "mongoose";

const planetSchemas = new Schema({
  _id: String,
  name: String,
  rotation_period: Number,
  orbital_period: Number,
  diameter: Number,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: Number,
  residents: [{ type: String, ref: "Characters" }],
  films: [{ type: String, ref: "Films" }],
});

export default planetSchemas;
