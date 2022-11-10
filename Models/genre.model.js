import mongoose from "mongoose";

const genreSchema = mongoose.Schema({
    genreName: String,
    description: String
})

const Genre = mongoose.model('Genre', genreSchema)

export default Genre