'use strict';

var mongoose    = require('mongoose'),
    Img  = null,
    ImageSchema = null;

ImageSchema = new mongoose.Schema({
    src: {type: String, required: true},
    origin: {type: String, required: true},
    crawlId: {type: mongoose.Schema.Types.ObjectId}
});

ImageSchema.statics.base64EncodeImage = function(response){
    var dataUriPrefix = 'data:' + response.headers['content-type'] + ';base64,',
        img = new Buffer(response.body.toString(), 'binary').toString('base64');
    img = dataUriPrefix + img;
    return img;
};

ImageSchema.statics.findByCrawl = function(crawlId, cb){
    Img.find({crawlId : crawlId}, function(err, images){
    //Img.find({}, function(err, images){
        console.log('IMAGES RESULTS', images);
        console.log('err RESULTS', err);
        cb(err, images);
    });
};

Img = mongoose.model('Img', ImageSchema);

module.exports = Img;
