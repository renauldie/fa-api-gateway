const express = require('express');
const router = express.Router();

const roleHandler = require('./handler/roles');

router.get('/', roleHandler.getAll);
router.get('/:id', roleHandler.get);
router.post('/', roleHandler.create);
router.put('/:id', roleHandler.update);
router.delete('/:id', roleHandler.destroy);

module.exports = router;
