const express = require('express');
const router = express.Router();
const { BooksController } = require('../controller');
const { BooksValidator } = require('../validators')

router.post('/books', BooksValidator.create, BooksController.create);
router.get('/books', BooksController.find);
router.get('/books/:id', BooksController.findById);
router.patch('/books/:id', BooksController.findByIdAndUpdate);
router.delete('/books/:id', BooksController.findByIdAndDelete);

router.post('/users/:id/books', RolesValidator.addBook, RolesController.addBookToUser);
router.get('/users/:id/books', RolesController.find);
router.get('/users/:idUser/books/:idRole', RolesController.findById);
router.patch('/users/:idUser/books/:idRole', RolesValidator.update, RolesController.findByIdAndUpdate); 
router.delete('/users/:idUser/books/:idRole', RolesController.findByIdAndDelete);

module.exports = router;