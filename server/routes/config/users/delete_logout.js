'use strict';

module.exports = {
    description: 'Logout',
    notes: 'Logs the user out',
    tags: ['logout'],
    handler: function(request, reply){
        request.auth.session.clear();
        reply().code(200).header('X-Authenticated-User', 'anonymous');
    }
};
