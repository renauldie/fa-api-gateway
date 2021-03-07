var express = require('express');
var router = express.Router();

const userHandler = require('./handler/user/users');
const verifyToken = require('../middleware/verifyToken');

router.post('/login', userHandler.login);
router.put('/', verifyToken, userHandler.update);
router.get('/', verifyToken, userHandler.getUser);
router.post('/logout', verifyToken, userHandler.logout);

module.exports = router;
