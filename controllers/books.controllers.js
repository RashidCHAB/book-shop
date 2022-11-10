import Book from "../Models/book.model.js";

export default {
    addBook: (req, res) => {
        Book.create({
            bookName: req.body.bookName,
            author: req.body.author,
            genre: req.body.genre,
        }).then((a) => {
            res.json(a)
        }).catch({"error": "Error adding book"})
    },

    delBook: (req, res) => {
        Book.findByIdAndDelete(req.params.bookId).then(() => {
            res.json('Book deleted succesfully')
        }).catch({"error": "Error deleting book"})
     },

    updateBook: (req, res) => {
        Book.findByIdAndUpdate(req.params.bookId, {
            bookName: req.body.bookName,
            author: req.body.author,
            genre: req.body.genre,
        }, {new: true}).then((book) => {
            res.json(book)
        }).catch({"error": "Error updating book"})
     },
     
    getBookById: (req, res) => {
        Book.findById(req.params.bookId).then((book) => {
            res.json(book)
        }).catch({"error": "Error updating book"})
     },

    getBooks: (req, res) => {
        Book.find().then((book) => {
            res.json(book)
        }).catch({"error": "Error updating book"})
     },

    getBooksByGenre: (req, res) => { 
        Book.find({genre :req.params.genreId}).then((book) => {
            res.json(book)
        }).catch({"error": "Error updating book"})
    },
}