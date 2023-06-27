import { Router } from "express"
import controllers from "../controllers/index.js";

const router = Router();

router.get("/", controllers.getCharacters)

router.post("/", controllers.postCharacters)

export default router;