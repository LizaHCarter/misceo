'use strict';

var Hapi     = require('hapi'),
    server   = new Hapi.Server('0.0.0.0', process.env.PORT),
    routes   = require('./routes/routes'),
    plugins  = require('./lib/plugins'),
    mongoose = require('mongoose').connect(process.env.DB);

server.route(routes);

mongoose.connection.once('open', function(){
    server.pack.register(plugins, function(err){
        if(err){throw err;}
        server.auth.strategy('session', 'cookie', {
            password: 'secret',
            cookie: 'session',
            redirectTo: false,
            isSecure: false,
            ttl: 3 * 24 * 60 * 60 * 1000,
            validateFunc: require('./lib/security')
        });
        server.start(function(){
            server.log('info', 'Server running at: ' + server.info.uri);
        });
    });
});

module.exports = server;
