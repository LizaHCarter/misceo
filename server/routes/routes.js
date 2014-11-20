'use strict';

module.exports = [
    {method: 'GET',  path: '/{params*}', config: require('./config/static/get_statics')},
    {method: 'GET',  path: '/profile'  , config: require('./config/users/get_profile')},
    {method: 'PUT',  path: '/profile'  , config: require('./config/users/put_profile')},
    {method: 'POST', path: '/register',  config: require('./config/users/post_register')},
    {method: 'POST', path: '/login',     config: require('./config/users/post_login')},
    {method: 'DELETE',  path: '/logout', config: require('./config/users/delete_logout')}
];

