const express = require('express');
const router = express.Router();
const passportConfig = require('../configs/passport.config');

const authController = require('../controllers/auth.controller');

router.post('/login', authController.postLogin);
router.post('/register', authController.postRegister);
router.post('/logout', passportConfig.isAuthenticated, authController.postLogout);

module.exports = router;
