'use strict';

var mongoose    = require('mongoose'),
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

module.exports = mongoose.model('Image', ImageSchema);
