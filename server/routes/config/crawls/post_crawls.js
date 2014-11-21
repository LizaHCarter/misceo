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
    auth: {
        mode: 'required'
    },
    handler: function(request, reply){
        request.payload.userId = request.auth.credentials._id;
        var c = new Crawler(request.payload);
        c.crawl(function(err, crawlId, imgCount){
            c.imgCount = imgCount;
            c.save(function(err){
                reply(crawlId);
            });
        });
    }
};
