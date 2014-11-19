'use strict';

module.exports = function(session, callback){
    cache.get(session.sid, function (err, cached) {
        if (err) {
            return callback(err, false);
        }
        if (!cached) {
            return callback(null, false);
        }
        return callback(null, true, cached.item.account)
    })
};

