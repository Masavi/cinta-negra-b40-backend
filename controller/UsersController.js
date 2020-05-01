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
  findById: (req, res) => {

  },
  findByIdAndUpdate: (req, res) => {
    const { id } = req.params;
    const { body } = req;
    UsersService.findById(id)
      .then(user => UsersService.update(user, body))
      .then(updatedUser => res.status(200).send(updatedUser))
      .catch(err => res.status(400).send({ message: "Error updating user", err }));
  },
  findByIdAndDelete: (req, res) => {

  }
}
