'use strict';

var Message = require('../../../models/message');

module.exports = {
    description: 'Get all messages for the logged in user',
    notes: 'A get to /messages should contain an object with the iD of the currently logged in user. This will return all messages sent to that user',
    tags: ['messaging'],
    auth: {
        mode: 'required'
    },
    handler: function(request, reply){
        //console.log('REQUEST>>>>>>>>',request);
        Message.messages(request.auth.credentials.userId, function(err, messages){
            if(messages){
                reply(messages).code(200);
            }else{
                reply(err).code(400);
            }
        });
    }
};

