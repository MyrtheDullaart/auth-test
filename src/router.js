const express = require('express');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET

const router = express.Router();

module.exports = router;
