'use strict';
var User = require('../../../models/user');
module.exports = {
  description: 'Profile',
  notes: 'The Profile page',
  tags:['profile'],
  auth: {
    mode: 'required'
  },
  handler: function(request, reply){
    console.log(request.auth.credentials.userId);
    var query = User.findById(request.auth.credentials.userId).select('-password -_id -__v');
    query.exec(function(err, user){
      reply(user);
    });
  }
};
