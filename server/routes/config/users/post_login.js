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
        User.authenticate(request.payload, function(user){
            if(user){
                request.auth.session.set(user);
                reply();
            }else{
                reply().code(401);
            }
        });
    }
};
