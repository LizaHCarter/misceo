'use strict';

var User = require('../../../models/user'),
    Joi = require('joi');

module.exports = {
    description: 'Register',
    notes: 'Route to register a new user',
    tags: ['register'],
    validate: {
        payload: {
            name: Joi.string().min(1).required(),
            password: Joi.string().min(3).required(),
            email: Joi.string().required()
        }
    },
    auth: {
        mode: 'try'
    },
    handler: function(request, reply){
        User.registerUser(request.payload, function(err, user){
            if(user){
                var cookieData = {_id: user._id, name: user.name, email: user.email};
                request.auth.session.set(cookieData);
                reply().code(200).header('X-Authenticated-User', user.name);
            }else{
                reply().code(err ? 500 : 401);
            }
        });
    }
};

