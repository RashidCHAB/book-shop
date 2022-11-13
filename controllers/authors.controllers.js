import Author from "../Models/author.model.js";

export default {
    addAuthor: (req, res) => {
        Author.create({
            authorName: req.body.authorName,
            biography: req.body.biography
        }).then((author) => {
            res.json(author)
        }).catch({ "error": "Error adding author" })

    },
    getAuthors: (req, res) => {
        Author.find()
        .then((author) => {
            res.json(author)
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
// {
//     "text": "Отличная книга, стоит своего времени",
//     "author": "636d04dc5e220a93872a8251",
//     "book": "636d059719be9a4642777815"
// }