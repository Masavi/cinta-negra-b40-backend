const express = require('express');
const router = express.Router();

const Users = require('../models/Users');

// middleware that is specific to this router
// router.use( (req, res, next) => {
//   console.log('Time: ', Date.now());
//   next();
// });

// CRUD Usuario

// CREATE
router.post('/api/v1/users', (req, res) => {
  Users.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(err => res.status(400).send({ message: 'Error creating user', err }));
});

// GET (ALL)
router.get('/api/v1/users', (req, res) => {
  Users.find()
    .then(users => res.status(200).send(users))
    .catch(err => res.status(404).send({ message: 'Users not found', err }));
});

module.exports = router;