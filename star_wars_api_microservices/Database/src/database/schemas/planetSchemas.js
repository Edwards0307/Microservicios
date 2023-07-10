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

planetSchemas.statics.list = async function () {
  return this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["id", "title"]);
};

planetSchemas.statics.get = async function (id) {
  return this.findById(id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["id", "title"]);
};

planetSchemas.statics.insert = async function (planet) {
  return this.create(planet)
}

export default planetSchemas;
