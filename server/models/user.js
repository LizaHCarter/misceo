'use strict';

var mongoose = require('mongoose'),
    UserSchema = new mongoose.Schema({
        name: {type: String, required: true, validate: [nameV, 'name length']},
        email: {type: String, required: true},
        password: {type: String, required: true},
        pic:  {type: String, default: ''}
    });

module.exports = mongoose.model('Task', {
    name:       {type: String, required: true, validate: [nameV, 'name length']},
    dueDate:    {type: Date, required: true},
    isComplete: {type: Boolean, required: true},
    priority:   {type: mongoose.Schema.ObjectId, ref: 'Priority', required: true}
});

function nameV(v){
    return v.length > 0;
}



