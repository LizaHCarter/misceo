'use strict';

var User = require('../../models/user');

exports.register = function(req, res){
    User.register(req.body, function(err, user){
        if(user){
            res.status(200).end();
        }else{
            res.status(400).end();
        }
    });
};