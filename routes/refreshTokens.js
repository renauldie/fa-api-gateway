var express = require('express');
var router = express.Router();

const refreshTokensHandler = require('./handler/user/refresh-tokens');

router.post('/', refreshTokensHandler.refreshToken);

module.exports = router;
