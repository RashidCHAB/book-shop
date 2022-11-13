import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    text: String,
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Author'
    },
    book: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book'
    }
})

const Review = mongoose.model('Review', reviewSchema)

export default Review