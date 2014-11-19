'use strict';

module.exports = {
    description: 'Static',
    notes: 'Route to serve static files',
    tags:['static'],
    handler: {
        directory: {
            path: __dirname + '/../../../public'
        }
    }
};
