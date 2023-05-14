const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  quizURL: {
    type: String,
    required: true,
  },
});

const QuizModel = mongoose.model('quiz', QuizSchema);

module.exports = QuizModel;
