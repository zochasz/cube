const express = require('express');
const router = express.Router();

const projectController = require('../controllers/project.controller');

router.get('/project', projectController.getAll);
router.post('/project', projectController.create);
router.put('/project/:id', projectController.edit);
router.delete('/project/:id', projectController.remove);
router.get('/project/:id', projectController.getOne);

module.exports = router;
