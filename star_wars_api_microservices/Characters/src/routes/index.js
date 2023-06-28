import { Router } from "express"
import controllers from "../controllers/index.js";

const router = Router();

router.get("/characters", controllers.getCharacters)

router.post("/characters", controllers.postCharacters)

export default router;