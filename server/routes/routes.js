'use strict';

module.exports = [
    {method: 'GET',    path: '/{params*}',   config: require('./config/static/get_statics')},
    {method: 'GET',    path: '/profile'  ,   config: require('./config/users/get_profile')},
    {method: 'PUT',    path: '/profile'  ,   config: require('./config/users/put_profile')},
    {method: 'POST',   path: '/register',    config: require('./config/users/post_register')},
    {method: 'POST',   path: '/login',       config: require('./config/users/post_login')},
    {method: 'DELETE', path: '/logout',      config: require('./config/users/delete_logout')},
    {method: 'GET',    path: '/crawls',      config: require('./config/crawls/get_crawls')},
    {method: 'GET',    path: '/crawls/{id}', config: require('./config/crawls/get_crawl')},
    {method: 'POST',   path: '/crawls',      config: require('./config/crawls/post_crawls')},
    {method: 'DELETE', path: '/crawls/{id}', config: require('./config/crawls/delete_crawl')}
];

