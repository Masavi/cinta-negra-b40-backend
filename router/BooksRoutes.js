const express = require('express');
const router = express.Router();
const { BooksController } = require('../controller');
const { BooksValidator } = require('../validators')

router.post('/books', BooksValidator.create, BooksController.create);
router.get('/books', BooksController.find);
router.get('/books/:id', BooksController.findById);
router.patch('/books/:id', BooksController.findByIdAndUpdate);
router.delete('/books/:id', BooksController.findByIdAndDelete);

router.post('/users/:id/books', BooksValidator.addBookToUser ,BooksController.addBookToUser);
router.get('/users/:id/books', BooksController.findUserBooks);
router.get('/users/:idUser/books/:idBook', BooksController.findUserBookById);
router.delete('/users/:idUser/books/:idBook', BooksController.deleteUserBookById);

module.exports = router;