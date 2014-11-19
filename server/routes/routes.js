'use strict';

module.exports = [
    {method: 'GET',  path: '/{params*}', config: require('./config/static/get_statics')},
    {method: 'POST', path: '/register', config: require('./config/users/post_register')}
];

