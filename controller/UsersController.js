const { UsersService } = require('../services')

module.exports = {
  create: (req, res) => {
    UsersService.create(req.body)
      .then(user => res.status(201).send(user))
      .catch(err => res.status(400).send({ message: 'Error creating user', err }));
  },
  find: (req, res) => {
    UsersService.find()
      .then(users => res.status(200).send(users))
      .catch(err => res.status(404).send({ message: 'Users not found', err }));
  },
  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UsersService.findById(id); 
      res.status(200).send(user);
    } catch (error) {
      res.status(404).send({ message: "Not found", err })
    }
  },
  findByIdAndUpdate: (req, res) => {
    const { id } = req.params;
    const { body } = req;
    UsersService.findById(id)
      .then(user => UsersService.update(user, body))
      .then(updatedUser => res.status(200).send(updatedUser))
      .catch(err => res.status(400).send({ message: "Error updating user", err }));
  },
  findByIdAndDelete: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UsersService.findById(id);
      await UsersService.update(user, { is_active: false })
      res.status(204).send(); 
    } catch (error) {
      res.status(404).send({ message: "Error deleting user", error });
    }
  }
}
