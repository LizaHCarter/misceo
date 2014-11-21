'use strict';

var Message = require('../../../models/messages'),
    Joi = require('joi');

module.exports = {
    description: 'Send a Message',
    notes: 'A post to /messages will create a new message',
    tags: ['messageing'],
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

