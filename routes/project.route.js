const express = require('express');
const router = express.Router();
const passportConfig = require('../configs/passport.config');

const projectController = require('../controllers/project.controller');

router.get('/project', passportConfig.isAuthenticated, projectController.getAll);
router.post('/project', passportConfig.isAuthenticated, projectController.create);
router.put('/project/:id', passportConfig.isAuthenticated, projectController.edit);
router.delete('/project/:id', passportConfig.isAuthenticated, projectController.remove);
router.get('/project/:id', passportConfig.isAuthenticated, projectController.getOne);

module.exports = router;
