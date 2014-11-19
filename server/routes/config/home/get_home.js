'use strict';

module.exports = {
    description: 'Home',
    notes: 'The Home page',
    tags:['home'],
    handler: function(request, reply){
        reply({data:'Home Page'});
    }
};
