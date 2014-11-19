'use strict';

module.exports = [
    {method: 'GET',  path: '/',         config: require('../controllers/home/get_home')},
    {method: 'POST', path: '/register', config: require('../controllers/users/post_register')}
];

