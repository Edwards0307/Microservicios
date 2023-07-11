import { Router } from "express";
import store from "../database/index.js";
import validate from "../middleware/validate.js";

const router = Router();

router.get("/:model", validate, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", validate, async(req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response)
})

router.post("/:model", validate, async (req, res) => {
  const character = req.body;
  const { model } = req.params
  console.log(character);
  const response = await store[model].insert(character);
  res.status(200).json(response)
})

export default router;
