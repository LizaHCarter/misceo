'use strict';

var User = require('../../../models/user'),
    Joi = require('joi');

module.exports = {
    description: 'Login',
    notes: 'Route to log user in',
    tags:['login'],
    validate: {
        payload: {
            password: Joi.string().min(3).required(),
            email: Joi.string().required()
        }
    },
    auth: {
        mode: 'try'
    },
    handler: function(request, reply){
        console.log(request.payload);
        User.authenticate(request.payload, function(user){
            if(user){
                console.log('login');
                var cookieData = {_id: user._id, name: user.name, email: user.email};
                request.auth.session.set(cookieData);
                reply().code(200).header('X-Authenticated-User', user.name);
            }else{
                console.log('not login');
                reply().code(401);
            }
        });
    }
};
