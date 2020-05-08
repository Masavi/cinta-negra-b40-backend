const Users = require('../models/Users');
const bcrypt = require('bcrypt');

module.exports = {
  create: (body) => {
    const newUser = new Users(body);
    return newUser.save();
  },
  find: () => Users.find({ is_active: true }),
  findById: (id) => Users.findById(id),
  findByEmail: (email) => Users.findOne({ email }),
  update: (user, body) => {
    Object.assign(user, body);
    return user.save();
  },
  comparePasswords: (candidatePassword, password) => {
    return bcrypt.compareSync(candidatePassword, password);
  },
  addRole: (user, role) => {
    user.roles.push(role);
    return user.save();
  },
  updateRole: (user, updatedRole) => {
    const updatedRoles = user.roles.filter((rol) => {
      if(rol._id === updatedRole._id) {
        return updatedRole;
      }
    });
    user.roles = updatedRoles;
    return user.save();
  },
  addBook: (user, book) => {
    user.books.push(book._id);
    return user.save();
  },
  findBook: (user, book) => {
    const idBook = book._id;
    console.log('✅', user);
    if (!user.books) return;
    if (user.books.length === 0) return;
    try {
      if (user.books.includes(idBook)) {
        return book;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  },
  deleteBook: (user, bookToDelete) => {
    const newUserBooks = user.books.filter((id) => {
      console.log('🦷', id, bookToDelete._id);
      if(id.toString() !== bookToDelete._id.toString()) return id;
    });
    user.books = newUserBooks;
    return user.save();
  },
}
