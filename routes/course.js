var express = require('express');
var router = express.Router();
const { APP_NAME } = process.env;
const verifyToken = require('../middleware/verifyToken');
const courseHandler = require('./handler/college/courses');

router.get('/', courseHandler.getAll);
router.get('/:id', courseHandler.get);
router.post('/', courseHandler.create);
// router.post('/', verifyToken, courseHandler.create);
router.put('/:id', verifyToken, courseHandler.update);
router.delete('/:id', verifyToken, courseHandler.destroy);

module.exports = router;
