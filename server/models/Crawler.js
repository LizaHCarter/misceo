'use strict';

var Crawler = require('crawler'),
    mongoose = require('mongoose'),
    Img = require('./image');
    //url     = require('url');

//this needs to export a mongoose scheme for our crawls

module.exports = mongoose.model('Crawler', {
        _id : {type: mongoose.Types.ObjectId, default: mongoose.Types.ObjectId()},
        name: {type: String, required: true},
        baseUrl: {type: String, required: true},
        depth: {type: Number, required: true}
    });

//this static method to be called from controller
//should return the full crawl object and save it to the db
Crawler.methods.crawl = function(name, baseUrl, depth, cb){

    var imageUrls  = [],
        pageUrls   = [],
        depthCount = 0,
        imageCrawler = null;

    imageCrawler = new Crawler({
        jquery: false,
        skipDuplicates: true,
        onDrain: function(){
            cb(null, this._id);
        }.bind(this),
        callback: function(err, result){
            var obj = {
                origin: result.uri,
                crawlId: this._id,
                src: Img.base64EncodeImage(result.body)
                },
                newImg = new Img(obj);
            newImg.save(function(err){});
        }.bind(this)
    });

    var pageCrawler = new Crawler({
        skipDuplicates: true,
        onDrain: function(){
            depthCount++;
            if(depthCount >= depth){
                imageCrawler.queue(imageUrls);
            }else{
                var temp = pageUrls;
                pageUrls = [];
                pageCrawler.queue(temp);
            }
        },
        callback: function(err, result, $){
            // $ is cheerio
            // hash(url w/o params or http://www), push into visited
            // use jquery selector to find all images

            $('img').each(function(){
                imageUrls.push(this.attr('src'));
            });
            // encode as base 64 stings, push to array w/ associated data

            // check each anchor tag href against existing arrays, if not then add to que
            $('a').each(function(){
                // need to validate these with the node URL module
                pageUrls.push(this.attr('href'));
            });
            // repeat for depth

            //https://gist.github.com/DSRoden/d909c265f2dda24879b3
        }
    });

    pageCrawler.queue(baseUrl);
};
