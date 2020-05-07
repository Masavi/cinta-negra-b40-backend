const { BooksService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      const book = await BooksService.create(req.body);
      res.status(201).send(book)
    } catch (err) {
      res.status(400).send({ message: 'Error creating book', err }); 
    }
  },
  find: async (req, res) => {
    try {
      const books = await BooksService.find();
      res.status(200).send(books)
    } catch (err) {
      res.status(404).send({ message: 'Books not found', err });
    }
  },
  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const book = await BooksService.findById(id);
      res.status(200).send(book)
    } catch (err) {
      res.status(404).send({ message: 'Book not found', err });
    }
  },
  findByIdAndUpdate: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const book = await BooksService.findById(id);
      const updatedBook = await BooksService.update(book, body);
      res.status(200).send(updatedBook)
    } catch (err) {
      res.status(404).send({ message: 'Book not found', err });
    }
  },
  findByIdAndDelete: async (req, res) => {
    const { id } = req.params;
    try {
      const book = await BooksService.findById(id);
      await BooksService.update(book, { is_active: false });
      res.status(204).send();
    } catch (err) {
      res.status(404).send({ message: 'Error deleting book', err });
    }
  },
}
