import Author from "../Models/author.model.js";

export default {
    addAuthor: (req, res) => {
        Author.create({
            authorName: req.body.authorName,
            biography: req.body.biography
        }).then((author) => {
            res.json(book)
        }).catch({ "error": "Error adding author" })

    },
    delAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.authorId).then((book) => {
            res.json('Author deleted succesfully')
        }).catch({ "error": "Error deleting author" })
    },
    updateAuthor: (req, res) => { 
        Author.findByIdAndUpdate(req.params.authorId, {
            authorName: req.body.authorName,
            biography: req.body.biography
        }, {new: true}).then((author) => {
            res.json(author)
        }).catch({ "error": "Error updating author" })
    },
}