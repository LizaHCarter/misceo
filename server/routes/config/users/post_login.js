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
                request.auth.session.set({userId: user._id});
                reply();
            }else{
                console.log('not login');
                reply().code(401);
            }
        });
    }
};
