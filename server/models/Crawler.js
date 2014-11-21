'use strict';

var mongoose      = require('mongoose'),
    CrawlerSchema = null,
    Crawler       = require('crawler'),
    Img           = require('./image'),
    url           = require('url');

CrawlerSchema = new mongoose.Schema({
    name:    {type: String, required: true},
    baseUrl: {type: String, required: true},
    depth:   {type: Number, required: true, validate: [depthV, 'depth must be between 1 & 3']}
});

function depthV(v){
    return v > 0 && v <= 3;
}

CrawlerSchema.methods.crawl = function(cb){
    var imageUrls    = [],
        pageUrls     = [],
        depthCount   = 0,
        pageCrawler  = null,
        imgCrawler   = null;

    imgCrawler = new Crawler({
        jquery: false,
        skipDuplicates: true,
        onDrain: function(){
            cb(null, this._id);
        }.bind(this),
        callback: function(err, result){
            // console.log(result);
            var obj = {
                    origin: result.uri,
                    crawlId: this._id,
                    src: Img.base64EncodeImage(result.body)
                },
                newImg = new Img(obj);
            newImg.save(function(err){});
        }.bind(this)
    });

    pageCrawler = new Crawler({
        skipDuplicates: true,
        onDrain: function(){
            // called when the current queue is exhausted, should be after 1 visited on first call
            // if we are at the requested depth call the image crawler on the array of image urls
            depthCount++;
            if(depthCount >= this.depth){
                imgCrawler.queue(imageUrls);
            }else{
                // call the pageCrawler recursively after each batch of URLs has been visited
                var temp = pageUrls;
                pageUrls = [];
                pageCrawler.queue(temp);
            }
        }.bind(this),
        callback: function(err, result, $){
            // $ is cheerio
            // Push the link for each image url found into master array
            // console.log(err);
            $('img').each(function(index, imgTag){
                var uri = $(imgTag).attr('src');
                if(uri.indexOf('http') === -1){
                    uri = url.resolve(result.uri, uri);
                }
                // console.log(uri);
                imageUrls.push(uri);
            });
            // Push all links on this page into the array or URLs we will visit next
            $('a').each(function(index, anchor){
                var uri = $(anchor).attr('href');
                if(uri.indexOf('http') === -1){
                    uri = url.resolve(result.uri, uri);
                }
                pageUrls.push(uri);
            });
        }
    });

    pageCrawler.queue(this.baseUrl);
};

module.exports = mongoose.model('Crawler', CrawlerSchema);
