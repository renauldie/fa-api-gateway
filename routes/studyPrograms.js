const express = require('express');
const router = express.Router();

const studyPrograms = require('./handler/study-programs');

router.get('/', studyPrograms.getAll);
router.get('/:id', studyPrograms.get);
router.post('/', studyPrograms.create);
router.put('/:id', studyPrograms.update);
router.delete('/:id', studyPrograms.destroy);

module.exports = router;
