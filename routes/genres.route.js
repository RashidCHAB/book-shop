import { Router } from "express";
import genresControllers from "../controllers/genres.controllers.js";

const router = Router()

router.post('/', genresControllers.addGenre)
router.delete('/', genresControllers.delGenre)
router.get('/', genresControllers.getGenres)

export default router