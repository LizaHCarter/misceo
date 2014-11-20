'use strict';

module.exports = [
    {method: 'GET',  path: '/{params*}', config: require('./config/static/get_statics')},
    {method: 'POST', path: '/register', config: require('./config/users/post_register')},
    {method: 'POST', path: '/login', config: require('./config/users/post_login')},
    {method: 'DELETE',  path: '/logout', config: require('./config/users/delete_logout')}
];

