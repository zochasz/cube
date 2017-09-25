const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');


router.get('/user', userController.get);
router.put('/user', userController.edit);
router.delete('/user', userController.remove);

module.exports = router;
