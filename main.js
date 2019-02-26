const path = require('path');
const express = require('express');

const usersController = require('../controllers/contacts');
const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/main', usersController.getUsers);

module.exports = router;