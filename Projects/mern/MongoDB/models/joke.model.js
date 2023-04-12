const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "Joke must not be blank"],
    minlength: [10, "Joke must be at least 10 characters long"],
  },
  punchline: {
    type: String,
    required: [true, "Punchline must not be blank"],
    minlength: [3, "Punchline must be at least 3 characters long"],
  },
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;