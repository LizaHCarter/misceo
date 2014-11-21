'use strict';

var Message = require('../../../models/message'),
    Joi = require('joi');

module.exports = {
    description: 'retrieve one message',
    notes: 'A get to /messages/{messageId} should return a single message',
    tags: ['messageing'],
    validate: {
        params: {
            messageId: Joi.string().length(24).required()
        }
    },
    auth: {
        mode: 'required'
    },
    handler: function(request, reply){
        Message.oneMessage(request.params.messageId, function(err, message){
            if(message){
                reply(message).code(200);
            }else{
                reply(err).code(400);
            }
        });
    }
};

