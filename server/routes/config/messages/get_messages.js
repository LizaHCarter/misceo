'use strict';

var Message = require('../../../models/messages'),
    Joi = require('joi');

module.exports = {
    description: 'Get all messages for the logged in user',
    notes: 'A get to /messages should contain an object with the iD of the currently logged in user. This will return all messages sent to that user',
    tags: ['messaging'],
    validate: {
        payload: {
            toId: Joi.string().length(24).required()
        }
    },
    auth: {
        mode: 'required'
    },
    handler: function(request, reply){
        Message.messages(request.payload.toId, function(err, messages){
            if(messages){
                reply(messages).code(200);
            }else{
                reply(err).code(400);
            }
        });
    }
};

