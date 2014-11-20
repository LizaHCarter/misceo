'use strict';

module.exports = {
  description: 'Profile',
  notes: 'The Profile page',
  tags:['profile'],
  handler: function(request, reply){
    reply({data:'Profile Page'});
  }
};
