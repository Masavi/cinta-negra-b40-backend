const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));

const Users = require('../models/Users');

// CRUD Usuario

// CREATE
server.post('/api/v1/users', (req, res) => {
  Users.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(err => res.status(400).send({ message: 'Error creating user', err }));
});

// GET (ALL)
server.get('/api/v1/users', (req, res) => {
  Users.find()
    .then(users => res.status(200).send(users))
    .catch(err => res.status(404).send({ message: 'Users not found', err }));
});

// exportar server para poder requerirlo desde otros archivos
module.exports = { server, PORT };

