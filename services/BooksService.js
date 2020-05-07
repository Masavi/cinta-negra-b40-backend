const { Books } = require('../models/Books');
const bcrypt = require('bcrypt');

module.exports = {
  create: (body) => {
    const newBook = new Books(body);
    return newBook.save();
  },
  find: () => Books.find({ is_active: true }),
  findById: (id) => Books.findById(id),
  update: (book, body) => {
    Object.assign(book, body);
    return book.save();
  },
}
