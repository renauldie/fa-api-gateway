const express = require('express');
const router = express.Router();

const organizerHandler = require('./handler/organizer/organizers');

router.get('/', organizerHandler.getAll);
router.get('/:id', organizerHandler.get);
router.post('/', organizerHandler.create);
router.put('/:id', organizerHandler.update);
router.delete('/:id', organizerHandler.destroy);

module.exports = router;
