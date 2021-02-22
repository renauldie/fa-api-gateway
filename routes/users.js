var express = require('express');
var router = express.Router();

const userHandler = require('./handler/users');

router.post('/login', userHandler.login);

module.exports = router;
