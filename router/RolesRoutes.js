const express = require('express');
const router = express.Router();
const { RolesController } = require('../controller');
const { RolesValidator } = require('../validators')

router.post('/users/:id/roles', RolesValidator.create, RolesController.create);
router.get('/users/:id/roles', RolesController.find);
router.get('/users/:idUser/roles/:idRole', RolesController.findById);
router.patch('/users/:idUser/roles/:idRole', RolesValidator.update, RolesController.findByIdAndUpdate); 
router.delete('/users/:idUser/roles/:idRole', RolesController.findByIdAndDelete);

module.exports = router;