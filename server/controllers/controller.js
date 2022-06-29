const Book = require('../models/book')

class Controller {
  static async allFavorite (req, res) {
    try {
      await Book.find().then((books) => {
        res.status(200).json(books);
      })
      
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal Server Error"
      });
    }

  }

  static async addFavorite (req, res) {
    try {
      const { title, imageLink, authors, rating} = req.body
      const book = new Book({
        title,
        imageLink,
        authors,
        rating,
      })

      await book.save().then((book) => {
        res.status(201).json(book)
      })
      
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal Server Error"
      });
    }

  }
}

module.exports = Controller;