'use strict';
var User = require('../../../models/user');
module.exports = {
  description: 'Get all users for Messaging',
  notes: 'Should return all users with a get',
  tags:['messaging'],
  auth: {
    mode: 'required'
  },
  handler: function(request, reply){
    User.allUsers(function(err, users){
      if(users){
        reply(users).code(200);
      }else{
        reply(err).code(400);
      }
    });
  }
};







