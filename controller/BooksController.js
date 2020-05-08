const { UsersService, BooksService } = require('../services');

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
  addBookToUserById: async (req, res) => {
    const { idUser, idBook }  = req.params;
    try {
      const user = await UsersService.findById(idUser);
      const book = await BooksService.findById(idBook);
      if (!book) res.status(404).send({ message: 'Book not found', err });
      const userWithBook = await UsersService.addBook(user, role);
      res.status(201).send(userWithBook);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error adding role to user', err }); 
    }
  },
  findUserBooks: async (req, res) => {
    const { id }  = req.params;
    try {
      const user = await UsersService.findById(id);
      res.status(200).send(user.books);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error getting user roles', err }); 
    }
  },
  findUserBookById: async (req, res) => {
    const { idUser, idBook }  = req.params;
    try {
      const user = await UsersService.findById(idUser);
      const book = user.books.id(idBook);
      if (!book.is_active) return res.status(404).send({ message: 'Book not found' });
      res.status(200).send(book);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error getting user book', err }); 
    }
  },
  updateUserBookById: async (req, res) => {
    const { idUser, idBook }  = req.params;
    try {
      const user = await UsersService.findById(idUser);
      const newBook = user.books.id(idBook);
      const userWithUpdatedBook = await UsersService.updateBook(user, newBook);
      res.status(200).send(userWithUpdatedBook);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error updating user role', err }); 
    }
  },
  deleteUserBookById: async (req, res) => {
    const { idUser, idBook }  = req.params;
    try {
      const user = await UsersService.findById(idUser);
      const book = user.books.id(idBook);
      if (!book.is_active) return res.status(404).send({ message: 'Book not found' });
      const deletedBook = await BooksService.update(book, { is_active: false });
      await UsersService.updateBook(user, deletedBook);
      res.status(204).send();
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error deleting user book', err }); 
    }
  },
}
