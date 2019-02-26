const path = require('path');
const rootDir = require('../util/path');
const User = require('../models/contact');
//const contacts = [];

exports.getAddUsers = (req ,res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'formularz.html'));
};

exports.postAddUsers = (req, res, next) => {
    //contacts.push({title: req.body.title});
    const user = new User( req.body.title);
    user.save();
        res.redirect('/main');
};

exports.getUsers = (req ,res ,next) => {
    //console.log(adminData.contacts);
    const users = User.fetchAll();
    res.sendFile(path.join(rootDir, 'views', 'main.html'));
};