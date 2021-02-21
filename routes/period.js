var express = require('express');
var router = express.Router();
const { APP_NAME } = process.env;

const periodHandler = require('./handler/periods');

router.get('/:id', periodHandler.get);
router.get('/', periodHandler.getAll);
router.post('/', periodHandler.create);
router.put('/:id', periodHandler.update);
router.delete('/:id', periodHandler.destroy);

module.exports = router;
