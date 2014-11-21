'use strict';

var Crawler = require('../../../models/crawler'),
    Joi     = require('joi');

module.exports = {
    description: 'Create new crawl',
    notes: 'Route to create a new crawl',
    tags: ['crawls'],
    validate: {
        payload: {
            name: Joi.string().min(3),
            baseUrl: Joi.string().min(10),
            depth: Joi.number().min(1).max(3)
        }
    },
    handler: function(request, reply){
        var c = new Crawler(request.payload);
        c.save(function(err){
            c.crawl(function(err, crawlId){
                reply(crawlId);
            });
        });
    }
};
