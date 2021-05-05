const express = require('express');
const router = express.Router();

const oprecHandler = require('./handler/oprec/oprec');

router.get('/', oprecHandler.get);
router.post('/', oprecHandler.create);
router.put('/:id', oprecHandler.update);
router.delete('/:id', oprecHandler.destroy);

module.exports = router;
