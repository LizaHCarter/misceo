'use strict';

var User = require('../../../models/user');
    //Joi = require('joi');

module.exports = {
    description: 'A temporary route to make sure i can save off a webcam pic in the db',
    notes: 'Temporary',
    tags: ['user pic', 'webcam'],
    auth: {
        mode: 'required'
    },
    handler: function(request, reply){
        console.log(request.payload);
        User.findOneAndUpdate({_id: request.auth.credentials._id}, request.payload, function(err, user){
            if (err || !user) {
                return reply().code(500);
            }
            delete user.password;
            reply(user);
        });
    }
};
