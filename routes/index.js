import { Router } from "express";

import booksRoute from "./books.route.js"
import authorsRoute from "./authors.route.js"
import genresRoute from "./genres.route.js"
import reviewsRoute from "./reviews.route.js"

const router = Router()

router.use('/books', booksRoute)
router.use('/authors', authorsRoute)
router.use('/genres', genresRoute)
router.use('/reviews', reviewsRoute)

export default router