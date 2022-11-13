import Review from "../Models/review.model.js";

export default {
    addRewiew: (req, res) => {
        Review.create({
            text: req.body.text,
            author: req.body.author,
            book: req.body.book
        }).then((a) => {
            res.json(a)
        }).catch({"error": "Error adding review"})
    },
    delRewiew: (req, res) => {
        Review.findByIdAndDelete(req.params.reviewId).then(() => {
            res.json("Review deleted succesfully")
        }).catch({"error": "Error deleting review"})
    },
    getRewiews: (req, res) => {
        Review.find({book: req.params.bookId})
        .populate('author')
        .populate('book')
        .then((a) => {
            res.json(a)
        }).catch({"error": "Error display reviews"})
    }
}