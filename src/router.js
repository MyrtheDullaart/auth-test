const express = require('express');
const { createUser, loginUser, getProfile } = require('./controllers/user');

const router = express.Router();

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)

module.exports = router;
