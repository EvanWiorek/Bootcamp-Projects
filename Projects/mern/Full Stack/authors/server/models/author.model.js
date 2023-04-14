const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name cannot not be blank."],
      minlength: [3, "First name needs to be at least 3 characters long."],
    },
    lastName: {
      type: String,
      required: [true, "Last name cannot not be blank."],
      minlength: [3, "Last name needs to be at least 3 characters long."],
    },
  },
  { timestamps: true }
);

module.exports.Author = mongoose.model('Author', AuthorSchema);
