import { Router } from "express"
import controllers from "../controllers/index.js"

const router = Router();

router.get("/", controllers.getFilms);

router.post("/", controllers.postFilms);

export default router;