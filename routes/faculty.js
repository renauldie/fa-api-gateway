const express = require('express');
const router = express.Router();

const facultyHandler = require('./handler/faculties');

router.get('/', facultyHandler.getAll);
router.get('/:id', facultyHandler.get);
router.post('/', facultyHandler.create);
router.put('/:id', facultyHandler.update);
router.delete('/:id', facultyHandler.destroy);

module.exports = router;
