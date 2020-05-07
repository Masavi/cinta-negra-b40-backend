const { Roles } = require('../models/Roles');

module.exports = {
  create: (body) => {
    const newRole = new Roles(body);
    return newRole;
  },
}
