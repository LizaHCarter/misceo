'use strict';

var mongoose   = require('mongoose'),
    bcrypt     = require('bcrypt'),
    UserSchema = new mongoose.Schema({
        name:     {type: String, required: true, validate: [nameV, 'name length']},
        email:    {type: String, required: true},
        password: {type: String, required: true},
        bio:      {type: String, default: 'I love pictures. Pictures are the best. Growing up I wanted to be either a picture or Batman. Now I just want to be a picture OF Batman.'},
        pic:      {type: String, default: '/assets/default-profile.jpg'}
    });

UserSchema.statics.registerUser = function(o, cb){
    this.findOne({email: o.email}, function(err, user){
        if(user || o.password.length < 3 || err){return cb('Failed to register user');}
        o.password = bcrypt.hashSync(o.password, 10);
        user = new this(o);
        user.save(function(err){
            cb(err, user);
        });
    }.bind(this));
};

function nameV(v){
    return v.length > 0;
}

module.exports = mongoose.model('User', UserSchema);



