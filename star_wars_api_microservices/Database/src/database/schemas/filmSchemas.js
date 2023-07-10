import { Schema } from "mongoose";

const filmSchemas = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [{ type: String, ref: "Characters" }],
  planets: [{ type: String, ref: "Planets" }],
});

filmSchemas.statics.list = async function () {
  return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchemas.statics.get = async function (id) {
  return await this.findById(id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchemas.statics.insert = async function (film) {
  return await this.create(film)
}

export default filmSchemas;
