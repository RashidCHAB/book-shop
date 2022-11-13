import { Router } from "express";
import reviewsControllers from "../controllers/reviews.controllers.js";

const router = Router()

router.post("/:bookId", reviewsControllers.addRewiew)
router.delete("/:reviewId", reviewsControllers.delRewiew)
router.get("/:bookId", reviewsControllers.getRewiews)

export default router