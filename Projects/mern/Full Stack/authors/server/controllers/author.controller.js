const { response, request } = require("express");
const { Author } = require("../models/author.model");

module.exports.getAllAuthors = (request, response) => {
  Author.find({})
    .then((authors) => response.status(200).json(authors))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAuthor = (request, response) => {
  Author.findOne({ _id: request.params.id })
    .then((author) => response.status(200).json(author))
    .catch((err) => response.status(400).json(err));
};

module.exports.createAuthor = (request, response) => {
  const { firstName, lastName } = request.body;
  Author.create({
    firstName,
    lastName
  })
    .then((author) => response.status(201).json(author))
    .catch((err) => response.status(400).json(err));
};

module.exports.updateAuthor = (request, repsonse) => {
  Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updatedAuthor) => repsonse.status(200).json(updatedAuthor))
    .catch((err) => response.status(400).json(err));
};

module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.status(200).json(deleteConfirmation))
    .catch((err) => response.status(400).json(err));
};
