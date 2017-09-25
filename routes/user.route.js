const express = require('express');
const router = express.Router();
const passportConfig = require('../configs/passport.config');

const userController = require('../controllers/user.controller');


router.get('/user', passportConfig.isAuthenticated, userController.get);
router.put('/user', passportConfig.isAuthenticated, userController.edit);
router.delete('/user', passportConfig.isAuthenticated, userController.remove);

module.exports = router;
