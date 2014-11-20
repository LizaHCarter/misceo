'use strict';

var Crawler = require('crawler'),
    mongoose = require('mongoose');
    //url     = require('url');

//this needs to export a mongoose scheme for our crawls

module.exports = mongoose.model('Crawler', {
        name: {type: String, required: true},
        baseUrl: {type: String, required: true},
        depth: {type: Number, required: true}
    });

//this static method to be called from controller
//should return the full crawl object and save it to the db
Crawler.methods.crawl = function(name, baseUrl, depth){

    //var visited = [];

    var c = new Crawler({
        callback: function(err, result, $){
            // $ is cheerio
            // hash(url w/o params or http://www), push into visited
            // use jquery selector to find all images

            $('img').attr('src').each(function(){

                //download picture, use request
            });
            // encode as base 64 stings, push to array w/ associated data

            // check each anchor tag href against existing arrays, if not then add to que
            $('a').each(function(){});
            // repeat for depth

            //https://gist.github.com/DSRoden/d909c265f2dda24879b3
        }
    });

    c.queue(baseUrl);
};