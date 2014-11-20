'use strict';
var User = require('../../../models/user');
module.exports = {
  description: 'Profile',
  notes: 'The Profile page',
  tags:['profile'],
  handler: function(request, reply){
    User.findById(request.auth.credentials._id, function(err, user){
      delete user.password;
      reply(user);
    })
  }
};
