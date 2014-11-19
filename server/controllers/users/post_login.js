'use strict';

//var User = require('../../models/user');

module.exports = {
    description: 'Login',
    notes: 'Route to log user in',
    tags:['login'],
    handler: function(request, reply){
        reply({data:'Home Page'});
    }
};
