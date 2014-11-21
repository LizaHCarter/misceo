'use strict';

var Crawler       = require('crawler'),
    mongoose      = require('mongoose'),
    Img           = require('./image'),
    // url           = require('url'),
    CrawlerSchema = null;

CrawlerSchema = new mongoose.Schema({
    name:    {type: String, required: true},
    baseUrl: {type: String, required: true},
    depth:   {type: Number, required: true, validate: [depthV, 'depth must be between 1 & 3']}
});

function depthV(v){
    return v > 0 && v <= 3;
}

//this static method to be called from controller
//should return the full crawl object and save it to the db
CrawlerSchema.methods.crawl = function(cb){

    var imageUrls    = [],
        pageUrls     = [],
        depthCount   = 0,
        pageCrawler  = null,
        crawlId      = this._id;

    pageCrawler = new Crawler({
        skipDuplicates: true,
        onDrain: function(){
            // called when the current queue is exhausted, should be after 1 visited on first call
            // if we are at the requested depth call the image crawler on the array of image urls
            depthCount++;
            if(depthCount >= this.depth){
                runImageCrawler(crawlId, imageUrls, cb);
            }else{
                // call the pageCrawler recursively after each batch of URLs has been visited
                var temp = pageUrls;
                pageUrls = [];
                pageCrawler.queue(temp);
            }
        },
        callback: function(err, result, $){
            // $ is cheerio
            // Push the link for each image url found into master array
            $('img').each(function(){
                imageUrls.push(this.attr('src'));
            });
            // Push all links on this page into the array or URLs we will visit next
            $('a').each(function(){
                pageUrls.push(this.attr('href'));
            });
        }
    });

    pageCrawler.queue(this.baseUrl);
};

function runImageCrawler(crawlId, imageUrls, cb){
    var imageCrawler = new Crawler({
        jquery: false,
        skipDuplicates: true,
        onDrain: function(){
            cb(null, crawlId);
        }.bind(this),
        callback: function(err, result){
            var obj = {
                    origin: result.uri,
                    crawlId: crawlId,
                    src: Img.base64EncodeImage(result.body)
                },
                newImg = new Img(obj);
            newImg.save(function(err){});
        }.bind(this)
    });
    imageCrawler.queue(imageUrls);
}

module.exports = mongoose.model('Crawler', CrawlerSchema);
