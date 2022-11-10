import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
    authorName: String,
    biography: String
})

const Author = mongoose.model('Author', authorSchema)

export default Author