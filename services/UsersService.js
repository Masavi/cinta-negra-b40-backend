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
  updateBook: (user, newBook) => {
    const updatedBooks = user.books.filter((id) => {
      if(id === newBook._id) return newBook._id;
      return id;
    });
    user.books = updatedBooks;
    return user.save();
  },
}
