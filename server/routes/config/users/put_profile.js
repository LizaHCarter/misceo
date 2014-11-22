'use strict';

var User = require('../../../models/user'),
    Joi = require('joi');

module.exports = {
    description: 'Update User Profile',
    notes: 'Route to update a users profile',
    tags: ['user', 'update'],
    validate: {
        payload: {
            name: Joi.string(),
            email: Joi.string(),
            pic: Joi.string(),
            bio: Joi.string()
        }
    },
    auth: {
        mode: 'required'
    },
    handler: function(request, reply){
        console.log('server side '+request.payload);
        User.findOneAndUpdate({_id: request.auth.credentials.userId}, request.payload, function(err, user){
            if (err || !user) {
                return reply().code(500);
            }
            delete user.password;
            reply(user);
        });
    }
};

