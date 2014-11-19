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
    handler: function(request, reply){
        User.registerUser(request.payload, function(err, user){
            if(user){
                reply(user);
            }else{
                reply('There was an error');
            }
        });
    }
};

