const express = require('express');
const router = express.Router();

const portfolioController = require('../controllers/portfolio.controller');

router.get('/portfolio', portfolioController.getAll);
router.post('/portfolio', portfolioController.create);
router.put('/portfolio/:id', portfolioController.edit);
router.delete('/portfolio/:id', portfolioController.remove);
router.get('/portfolio/:id', portfolioController.getOne);

module.exports = router;
