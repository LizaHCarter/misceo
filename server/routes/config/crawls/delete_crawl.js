'use strict';

var Crawler = require('../../../models/crawler'),
    Img     = require('../../../models/image'),
    Joi     = require('joi');

module.exports = {
    description: 'Delete crawl',
    notes: 'Route to delete an existing crawl',
    tags: ['crawls'],
    validate: {
        params: {
            id: Joi.string().length(24)
        }
    },
    auth: {
        mode: 'required'
    },
    handler: function(request, reply){
       Img.remove({crawlId: request.params.id}, function(err){
           Crawler.remove({_id: request.params.id}, function(err){
               if(err){
                   reply().code(500);
               }else{
                   reply({crawlId: request.params.id});
               }
           });
       });
    }
};

