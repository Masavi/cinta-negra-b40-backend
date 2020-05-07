const { UsersService, RolesService } = require('../services');

module.exports = {
  create: async (req, res) => {
    const { id }  = req.params;
    const { body } = req;
    try {
      const user = await UsersService.findById(id);
      const role = await RolesService.create(body);
      const userWithRole = await UsersService.addRole(user, role);
      res.status(201).send(userWithRole);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error adding role to user', err }); 
    }
  },
  find: async (req, res) => {
    const { id }  = req.params;
    try {
      const user = await UsersService.findById(id);
      res.status(200).send(user.roles);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error getting user roles', err }); 
    }
  },
  findById: async (req, res) => {
    const { idUser, idRole }  = req.params;
    try {
      const user = await UsersService.findById(idUser);
      const role = user.roles.id(idRole);
      res.status(200).send(role);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error getting user role', err }); 
    }
  },
  findByIdAndUpdate: async (req, res) => {
    const { idUser, idRole }  = req.params;
    const { body } = req;
    try {
      const user = await UsersService.findById(idUser);
      const role = user.roles.id(idRole);
      const updatedRole = await RolesService.update(role, body);
      const userWithUpdatedRole = await UsersService.updateRole(user, updatedRole);
      res.status(200).send(userWithUpdatedRole);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error updating user role', err }); 
    }
  },
}
