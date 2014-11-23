'use strict';

var Img = require('../../../models/image'),
    Joi = require('joi');

module.exports = {
    description: 'retrieve all images associated with a crawl id',
    notes: 'A get to /images/{crawlId} should return an array of images that all point to the specified crawl',
    tags: ['crawls'],
    validate: {
        params: {
            crawlId: Joi.string().length(24).required()
        }
    },
    auth: {
        //change to try for testing,
        mode: 'try'
    },
    handler: function(request, reply){
        Img.findByCrawl(request.params.crawlId, function(err, images){
            if(images){
                reply(images).code(200);
            }else{
                reply(err).code(400);
            }
        });
    }
};

