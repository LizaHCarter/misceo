'use strict';  module.exports = [ {method: 'GET',  path: '/{params*}', config: require('./config/static/get_statics')},
    {method: 'GET'   , path: '/profile'  , config: require('./config/users/get_profile')},
    {method: 'PUT'   , path: '/profile'  , config: require('./config/users/put_profile')},
    {method: 'POST'  , path: '/register'  , config: require('./config/users/post_register')},
    {method: 'POST'  , path: '/login'     , config: require('./config/users/post_login')},
    {method: 'GET'   , path: '/messages'  , config: require('./config/messages/get_messages.js')},
    {method: 'POST'  , path: '/messages'  , config: require('./config/messages/post_messages.js')},
    {method: 'DELETE', path: '/logout'   , config: require('./config/users/delete_logout')}
];

