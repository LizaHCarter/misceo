/**
 * Created by mikeybadr on 11/20/14.
 */
'use strict';

var mongoose      = require('mongoose'),
    Message         = null,
    messageSchema = null;

  messageSchema = new mongoose.Schema({
    from: {
        id: {type: mongoose.Types.ObjectId, required: true},
        name: {type: String, required: true}
    },
    toId: {type: mongoose.Types.ObjectId, required: true},
    body: {type: String, required: true},
    subject: {type: String, default: '(no subject)'},
    time: {type: Date, default: Date.now}
});

Message = mongoose.models('Message', messageSchema);

messageSchema.statics.send = function(o, cb){
    var m = new Message({
        from: {
            id: o.sender._id,
            name: o.sender.name
            },
        toId: o.toId,
        body: o.body,
        subject: o.subject
    });

    m.save(function(err){
        cb(err, m);
    });
};

messageSchema.statics.messages = function(toId, cb){
    Message.find({toId : toId}, function(err, messages){
        cb(err, messages);
    });
};

module.exports = Message;
