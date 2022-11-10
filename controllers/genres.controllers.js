import Genre from "../Models/genre.model.js";

export default {
    addGenre: (req, res) => {
        Genre.create({
            genreName: req.body.genreName,
            description: req.body.description
        })
            .then((genre) => {
                res.json(genre)
            }).catch({ "error": "Error adding genre" })
    },
    delGenre: (req, res) => {
        Genre.findByIdAndDelete(req.params.genreId)
        .then(() => {
            res.json('Genre deleted succesfully')
        }).catch({ "error": "Error deleting genre" })
    },
    getGenres: (req, res) => { 
        Genre.find().then((a) => {
            res.json(a)
        }).catch({"error": "Genre display error"})
    }
}