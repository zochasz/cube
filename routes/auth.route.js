const express = require('express');
const router = express.Router();


const authController = require('../controllers/auth.controller');

router.post('/login', authController.postLogin);
router.post('/register', authController.postRegister);
router.post('/logout', authController.postLogout);

module.exports = router;
