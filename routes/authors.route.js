import { Router } from "express";
import authorsControllers from "../controllers/authors.controllers.js";

const router = Router()

router.get('/', authorsControllers.getAuthors)
router.post('/', authorsControllers.addAuthor)
router.patch('/:authorId', authorsControllers.updateAuthor)
router.delete('/:authorId', authorsControllers.delAuthor)

export default router