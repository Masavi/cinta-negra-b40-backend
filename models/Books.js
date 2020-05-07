const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: {
      type: String,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
});

const Books = mongoose.model('Books', booksSchema);

module.exports = { Books, booksSchema };