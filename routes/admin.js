const path = require('path');
const express = require('express');

const usersController = require('../controllers/contacts');
//const rootDir = require('../util/path');
const router = express.Router();
const users = [];


router.get('/formularz',usersController.getAddUsers);
router.post('/formularz', usersController.postAddUsers);

exports.routes = router;
exports.users = users;