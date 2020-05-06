const express = require('express');
const router = express.Router();
const { UsersController } = require('../controller');
const { verifyToken } = require('../middlewares');

router.post('/users/signup', UsersController.signup);
router.post('/users/login', UsersController.login);

router.use(verifyToken);

router.post('/users', UsersController.create);
router.get('/users', UsersController.find);
router.get('/users/:id', UsersController.findById);
router.patch('/users/:id', UsersController.findByIdAndUpdate);
router.delete('/users/:id', UsersController.findByIdAndDelete);

module.exports = router;