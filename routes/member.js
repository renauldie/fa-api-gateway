const express = require('express');
const router = express.Router();

const memberHandler = require('./handler/members');

router.get('/:id', memberHandler.get);
router.get('/', memberHandler.getAll);
router.post('/', memberHandler.create);
router.put('/:id', memberHandler.update);
router.put('/give-access/:id', memberHandler.giveAccess);
router.put('/remove-access/:id', memberHandler.removeAccess);
router.delete('/:id', memberHandler.destroy);

module.exports = router;
