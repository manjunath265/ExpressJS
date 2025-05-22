const express = require('express');
const { registerUser, loginUser,getUser} = require('../controller/userController');
const { validateTokenHandler } = require('../middleware/validateTokenHandler');
const router = express.Router();

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/me', validateTokenHandler, getUser)

module.exports = router;