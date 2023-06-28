import { Router } from "express"
import controllers from "../controllers/index.js"

const router = Router();

router.get("/films", controllers.getFilms);

router.post("/films", controllers.postFilms);

export default router;