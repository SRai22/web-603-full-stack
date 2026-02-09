const mongoose = require('mongoose');
const Book = mongoose.model('Book');

// Create a new book
exports.createBook = (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author
  });

  book.save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book."
      });
    });
};

// Retrieve a single book by id
exports.getBook = (req, res) => {
  Book.findById(req.params.id).select('-__v')
    .then(book => {
      if (!book) {
        return res.status(404).send({
          message: "Book not found with id " + req.params.id
        });
      }
      res.status(200).json(book);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Book not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error retrieving book with id " + req.params.id
      });
    });
};

// Retrieve all books
exports.getBooks = async (req, res) => {
  Book.find().select('-__v')
    .then(books => {
      res.status(200).json(books);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books."
      });
    });
};

// Update a book
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        author: req.body.author
      },
      { new: true }
    ).select('-__v');

    if (!book) {
      return res.status(404).send({
        message: "Book not found with id " + req.params.id
      });
    }
    res.status(200).json(book);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Book not found with id " + req.params.id
      });
    }
    return res.status(500).send({
      message: "Error updating book with id " + req.params.id
    });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id).select('-__v');

    if (!book) {
      return res.status(404).send({
        message: "Book not found with id " + req.params.id
      });
    }
    res.status(200).json({});
  } catch (err) {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Book not found with id " + req.params.id
      });
    }
    return res.status(500).send({
      message: "Could not delete book with id " + req.params.id
    });
  }
};
