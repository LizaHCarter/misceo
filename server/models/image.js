'use strict';

var mongoose    = require('mongoose'),
    ImageSchema = null;

ImageSchema = new mongoose.Schema({
    src: {type: String, required: true},
    origin: {type: String, required: true},
    crawlId: {type: mongoose.Types.ObjectId, required: true}
});

ImageSchema.statics.base64EncodeImage = function(imgData){
    return new Buffer(imgData).toString('base64');
};

module.exports = mongoose.models('Image', ImageSchema);
