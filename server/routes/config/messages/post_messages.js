'use strict';

var Message = require('../../../models/message'),
    Joi = require('joi');

module.exports = {
    description: 'Send a Message',
    notes: 'A post to /messages will create a new message',
    tags: ['messaging'],
    validate: {
        payload: {
            from: {
                id: Joi.string().length(24).required(),
                name: Joi.string().required()
            },
            toId: Joi.string().length(24).required(),
            body: Joi.string().required(),
            subject: Joi.string()
        }
    },
    auth: {
        mode: 'required'
    },
    handler: function(request, reply){
        Message.send(request.payload, function(err, message){
            if(message){
                reply(message).code(200);
            }else{
                reply(err).code(400);
            }
        });
    }
};

