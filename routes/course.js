var express = require('express');
var router = express.Router();
const { APP_NAME } = process.env;

const courseHandler = require('./handler/courses');

router.get('/', courseHandler.getAll);
router.get('/:id', courseHandler.get);
router.post('/', courseHandler.create);
router.put('/:id', courseHandler.update);
router.delete('/:id', courseHandler.destroy);

module.exports = router;
