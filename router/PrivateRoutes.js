const express = require('express');
const router = express.Router();

router.use(require('./UsersRoutes'));

module.exports = router;