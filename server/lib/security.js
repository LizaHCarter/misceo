'use strict';

var Bcrypt = require('bcrypt'),
    User   = require('../models/user');

module.exports = function(username, password, callback){
    var user = user[username];
    if(!user){
        return callback(null, false);
    }

    Bcrypt.compare(password, user.password, function(err, isValid){
        callback(err, isValid, {id: user.id, name: user.name});
    });
};
