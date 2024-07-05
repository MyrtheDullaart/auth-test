const express = require('express');
const jwt = require('jsonwebtoken');
const { createUser } = require('./controllers/user');
const secret = process.env.JWT_SECRET

const router = express.Router();

router.post('/register', createUser)

module.exports = router;
