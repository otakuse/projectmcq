const mongoose = require('mongoose')
const QuestionSchema = new mongoose.Schema({
    question: {
        type: String
    },
    ans_1: {
        type: String
    },
    ans_2: {
        type: String
    },
    ans_3: {
        type: String
    },
    correct: {
        type: Number
    }
});
const QuestionModel = mongoose.model("questions", QuestionSchema)
module.exports = QuestionModel;