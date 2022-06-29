const mongoose = require('mongoose');

const Book = mongoose.model('Book', {
  title: String,
  imageLink: String,
  authors: String,
  rating: Number,
})

module.exports = Book 