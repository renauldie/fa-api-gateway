const express = require('express');
const router = express.Router();

const selectedCourseHandler = require('./handler/oprec/selected-course');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, selectedCourseHandler.create);
router.get('/', verifyToken, selectedCourseHandler.get);
router.get('/all', selectedCourseHandler.getAll);
router.delete('/:id', verifyToken, selectedCourseHandler.destroy);

module.exports = router;
