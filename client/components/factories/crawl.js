(function(){
    'use strict';

    angular.module('misceo')
        .factory('Crawl', ['$http', function($http){
            function create(data){
                console.log('create crawl called from factory');
                return $http.post('/crawls', data);
            }

            function findAllForUser(){
                return $http.get('/crawls');
            }

            function findOne(crawlId){
                return $http.get('/crawls/' + crawlId);
            }

            function remove(crawlId){
                return $http.delete('/crawls/' + crawlId);
            }

            return {create: create, findAllForUser: findAllForUser, findOne: findOne, remove: remove};
        }]);
})();
