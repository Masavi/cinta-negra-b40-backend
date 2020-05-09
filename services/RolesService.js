const { Roles } = require('../models/Roles');

module.exports = {
  create: (body) => {
    const newRole = new Roles(body);
    return newRole;
  },
  update: (role, body) => {
    Object.assign(role, body);
    return role;
  }
}
