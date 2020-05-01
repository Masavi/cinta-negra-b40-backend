const express = require('express');
const router = express.Router();

const UsersController = require('../controller/UsersController');

// middleware that is specific to this router
// router.use( (req, res, next) => {
//   console.log('Time: ', Date.now());
//   next();
// });

// CREATE
router.post('/users', UsersController.create);

// GET (ALL)
router.get('/users', UsersController.find);

module.exports = router;