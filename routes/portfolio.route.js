const express = require('express');
const router = express.Router();
const passportConfig = require('../configs/passport.config');

const portfolioController = require('../controllers/portfolio.controller');

router.get('/portfolio', passportConfig.isAuthenticated, portfolioController.getAll);
router.post('/portfolio', passportConfig.isAuthenticated, portfolioController.create);
router.put('/portfolio/:id', passportConfig.isAuthenticated, portfolioController.edit);
router.delete('/portfolio/:id', passportConfig.isAuthenticated, portfolioController.remove);
router.get('/portfolio/:id', passportConfig.isAuthenticated, portfolioController.getOne);

module.exports = router;
