const express = require('express');
const router = express.Router();

const deanHandler = require('./handler/college/deans');

router.get('/', deanHandler.getAll);
router.get('/:id', deanHandler.get);
router.post('/', deanHandler.create);
router.put('/:id', deanHandler.update);
router.delete('/:id', deanHandler.destroy);

module.exports = router;
