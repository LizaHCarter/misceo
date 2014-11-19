'use strict';

module.exports = [
    {method: 'GET',  path: '/{params*}', config: require('../controllers/static/get_statics')},
    {method: 'POST', path: '/register', config: require('../controllers/users/post_register')}
];

