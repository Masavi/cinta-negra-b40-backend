const Users = require('../models/Users');

module.exports = {
  create: (req, res) => {
    Users.create(req.body)
      .then(user => res.status(201).send(user))
      .catch(err => res.status(400).send({ message: 'Error creating user', err }));
  },
  find: (req, res) => {
    Users.find()
      .then(users => res.status(200).send(users))
      .catch(err => res.status(404).send({ message: 'Users not found', err }));
  },
  findByid: () => {},
}
