import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    bookName: String,
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Author'
    },
    genre: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Genre'
    }
})

const Book = mongoose.model('Book', bookSchema)

export default Book