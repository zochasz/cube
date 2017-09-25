const express = require('express');
const router = express.Router();

const letterController = require('../controllers/letter.controller');

router.get('/letter', letterController.getAll);
router.post('/letter', letterController.create);
router.put('/letter/:id', letterController.edit);
router.delete('/letter/:id', letterController.remove);
router.get('/letter/:id', letterController.getOne);

module.exports = router;
