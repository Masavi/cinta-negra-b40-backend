const express = require('express');
const router = express.Router();
const { RolesController } = require('../controller');
const { RolesValidator } = require('../validators')

router.post('/users/:id/roles', RolesValidator.create, RolesController.create);
router.get('/users/:id/roles', RolesController.find);
router.get('/users/:idUser/roles/:idRole', RolesController.findById);
// router.delete('/users/:id/roles/:idRole', RolesController.findByIdAndDelete);

module.exports = router;