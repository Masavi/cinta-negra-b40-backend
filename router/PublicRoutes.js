const express = require('express');
const router = express.Router();

router.use(require('./AuthRoutes'));

module.exports = router;