const express = require('express');
const router = express.Router();
const passportConfig = require('../configs/passport.config');

const letterController = require('../controllers/letter.controller');

router.get('/letter', passportConfig.isAuthenticated, letterController.getAll);
router.post('/letter', passportConfig.isAuthenticated, letterController.create);
router.put('/letter/:id', passportConfig.isAuthenticated, letterController.edit);
router.delete('/letter/:id', passportConfig.isAuthenticated, letterController.remove);
router.get('/letter/:id', passportConfig.isAuthenticated, letterController.getOne);

module.exports = router;
