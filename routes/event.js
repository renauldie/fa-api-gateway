const express = require('express');
const router = express.Router();

const eventHandler = require('./handler/event/event');

router.get('/', eventHandler.getAll);
router.post('/', eventHandler.create);

module.exports = router;
