const Joke = require("../models/joke.model");

module.exports.getAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => {
      res.json({ joke: allJokes });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.getOneJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((oneJoke) => {
      res.json({ joke: oneJoke });
    })
    .catch((err) => {
      res.json({ message: "getOneJoke Error", error: err });
    });
};

module.exports.getRandomJoke = (req, res) => {
  Joke.aggregate([{$sample: {size: 1}}])
    .then((randomJoke) => {
      res.json({ joke: randomJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

// module.exports.getRandomJoke = (req, res) => {
//   Joke.count().exec((err, count) => {
//     console.log(count)
//     let random = Math.floor(Math.random() * count);
//     Joke.findOne()
//       .skip(random)
//       .exec.then((randomJoke) => {
//         res.json({ joke: randomJoke });
//       })
//       .catch((err) => {
//         res.json({ message: "getRandomJoke Error", error: err });
//       });
//   });
// };

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newlyCreatedJoke) => {
      res.json({ joke: newlyCreatedJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => {
      res.json({ joke: updatedJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};
