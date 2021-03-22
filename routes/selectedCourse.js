const express = require('express');
const router = express.Router();

const selectedCourseHandler = require('./handler/event/selected-course');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, selectedCourseHandler.create);
router.delete('/:id', verifyToken, selectedCourseHandler.destroy);

module.exports = router;
