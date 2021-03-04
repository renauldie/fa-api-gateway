const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

const studyPrograms = require('./handler/study-programs');

router.get('/', studyPrograms.getAll);
router.get('/:id', studyPrograms.get);
router.post('/', verifyToken, studyPrograms.create);
router.put('/:id', verifyToken, studyPrograms.update);
router.delete('/:id', verifyToken, studyPrograms.destroy);

module.exports = router;
