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
}
