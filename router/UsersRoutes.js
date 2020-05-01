const express = require('express');
const router = express.Router();

const Users = require('../models/Users');

// CREATE
router.post('/users', (req, res) => {
  Users.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(err => res.status(400).send({ message: 'Error creating user', err }));
});

// GET (ALL)
router.get('/users', (req, res) => {
  Users.find()
    .then(users => res.status(200).send(users))
    .catch(err => res.status(404).send({ message: 'Users not found', err }));
});

module.exports = router;