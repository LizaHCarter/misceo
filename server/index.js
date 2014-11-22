'use strict';

var Hapi     = require('hapi'),
    server   = new Hapi.Server('0.0.0.0', process.env.PORT),
    routes   = require('./routes/routes'),
    plugins  = require('./lib/plugins'),
    mongoose = require('mongoose').connect(process.env.DB);


mongoose.connection.once('open', function(){
    server.pack.register(plugins, function(){
        server.auth.strategy('session', 'cookie', true, {
            password: 'secret',
            cookie: 'nathan',
            isSecure: false
        });
        server.route(routes);
        server.start(function(){
            server.log('info', 'Server running at: ' + server.info.uri);
        });
    });
});

module.exports = server;
