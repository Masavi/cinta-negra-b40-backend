const Users = require('../models/Users');

module.exports = {
  create: (body) => {
    const newUser = new Users(body);
    return newUser.save();
  },
  find: () => Users.find({ is_active: true }),
  findById: (id) => Users.findById(id),
  update: (user, body) => {
    Object.assign(user, body);
    return user.save();
  }
}
