import { Router } from "express";
import booksControllers from "../controllers/books.controllers.js";

const router = Router()

router.post('/', booksControllers.addBook)
router.delete('/:bookId', booksControllers.delBook)
router.patch('/:bookId', booksControllers.updateBook)
router.get('/', booksControllers.getBooks)
router.get('/:bookId', booksControllers.getBookById)
router.get('/genre/:genreId', booksControllers.getBooksByGenre)

export default router