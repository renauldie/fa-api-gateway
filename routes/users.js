var express = require('express');
var router = express.Router();

const userHandler = require('./handler/users');
const verifyToken = require('../middleware/verifyToken');

router.post('/login', userHandler.login);
router.post('/logout', userHandler.logout);
router.put('/', verifyToken, userHandler.update);
router.get('/', verifyToken, userHandler.getUser);

module.exports = router;
