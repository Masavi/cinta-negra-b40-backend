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
      res.status(400).send({ message: 'Error creating user', err }); 
    }
  },
}
