const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const facultyHandler = require('./handler/faculties');

router.get('/', facultyHandler.getAll);
router.get('/:id', facultyHandler.get);
router.post('/', verifyToken, facultyHandler.create);
router.put('/:id', verifyToken, facultyHandler.update);
router.delete('/:id', verifyToken, facultyHandler.destroy);

module.exports = router;
