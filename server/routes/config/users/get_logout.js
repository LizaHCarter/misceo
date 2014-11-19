'use strict';

var User = require('../../../models/user'),
    Joi = require('joi');

module.exports = {
    description: 'Logout',
    notes: 'Logs the user out',
    tags: ['logout'],
    handler: function(request, reply){
        request.auth.session.clear();
        reply('logged out');
    }
};