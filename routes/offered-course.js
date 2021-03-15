const express = require('express');
const router = express.Router();

const offerdCourseHandler = require('./handler/event/offered-course');

router.get('/', offerdCourseHandler.getAll);
router.get('/:id', offerdCourseHandler.get);
router.post('/', offerdCourseHandler.create);
router.put('/:id', offerdCourseHandler.update);
router.delete('/:id', offerdCourseHandler.destroy);

module.exports = router;
