'use strict';

var Crawler = require('../../../models/crawler');

module.exports = {
    description: 'View All Crawls',
    notes: 'View all crawls for logged in user',
    tags: ['crawls'],
    auth: {
        mode: 'required'
    },
    handler: function(request, reply){
        Crawler.find({userId: request.auth.credentials._id}, function(err, crawls){
            if(err){
                reply(err).code(500);
            }else{
                reply({crawls: crawls});
            }
        });
    }
};
