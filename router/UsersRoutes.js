const express = require('express');
const router = express.Router();
const { UsersController } = require('../controller');

// CREATE
router.post('/users', UsersController.create);

// GET (ALL)
router.get('/users', UsersController.find);

// GET (ONE)
router.get('/users/:id', UsersController.findById);

// UPDATE
router.patch('/users/:id', UsersController.findByIdAndUpdate);

// DELETE

module.exports = router;