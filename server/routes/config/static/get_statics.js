'use strict';

module.exports = {
    description: 'Static',
    notes: 'Route to serve static files',
    tags:['static'],
    auth: false,
    handler: {
        directory: {
            path: __dirname + '/../../../../public'
        }
    }
};
