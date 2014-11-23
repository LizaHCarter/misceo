'use strict';

var Message = require('../../models/message');

exports.send = function(request, reply){
  Message.send(request.payload, function(err, m){
    if(m){
      reply(m).code(200);
    }else{
      reply(err).code(400);
    }
  });
};

exports.getMessages = function(request, reply){
  Message.messages(request.payload.toId, function(err, messages){
    if(messages){
      reply(messages).code(200);
    }else{
      reply(err).code(400);
    }
  });
};

