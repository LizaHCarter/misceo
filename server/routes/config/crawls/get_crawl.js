'use strict';

var Crawler = require('../../../models/crawler'),
    Img     = require('../../../models/image'),
    Joi     = require('joi');

module.exports = {
    description: 'View Single Crawl',
    notes: 'View Crawl for user',
    tags: ['crawls'],
    auth: {
        mode: 'required'
    },
    validate: {
        params: {
            id: Joi.string().length(24)
        }
    },
    handler: function(request, reply){
        Crawler.findById(request.params.id, function(err, crawl){
            Img.find({crawlId: crawl._id}, function(err, images){
                crawl.images = images;
                reply({crawl: crawl});
            });
        });
    }
};
