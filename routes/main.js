const express = require('express');
const mainRoute = require('../controllers/main')

const router = express.Router();

router.get( '/', mainRoute.mainController);

module.exports = router;