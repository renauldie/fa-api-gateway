var express = require('express');
var router = express.Router();

const periodHandler = require('./handler/organizer/periods');

router.get('/:id', periodHandler.get);
router.get('/', periodHandler.getAll);
router.post('/', periodHandler.create);
router.put('/:id', periodHandler.update);
router.delete('/:id', periodHandler.destroy);

module.exports = router;
