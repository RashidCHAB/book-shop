import Review from "../Models/review.model.js";

export default {
    addRewiew: (req, res) => {
        Review.create({
            text: req.body.text,
            reviewAuthorName: req.body.reviewAuthorName,
            book: req.body.book
        }).then((a) => {
            res.json(a)
        }).catch({"error": "Error adding review"})
    },
    delRewiew: (req, res) => {
        Review.findByIdAndDelete(req.params.reviewId).then((a) => {
            res.json(a)
        }).catch({"error": "Error adding review"})
    },
    getRewiews: (req, res) => {
        Review.find().then((a) => {
            res.json(a)
        }).catch({"error": "Error adding review"})
    }
}