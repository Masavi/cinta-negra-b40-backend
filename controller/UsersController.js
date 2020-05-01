const { UsersService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      const user = await UsersService.create(req.body);
      res.status(201).send(user)
    } catch (error) {
      res.status(400).send({ message: 'Error creating user', err }); 
    }
  },
  find: async (req, res) => {
    try {
      const users = await UsersService.find();
      res.status(200).send(users)
    } catch (error) {
      res.status(404).send({ message: 'Users not found', err });
    }
  },
  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UsersService.findById(id);
      res.status(200).send(user)
    } catch (error) {
      res.status(404).send({ message: 'User not found', err });
    }
  },
}
