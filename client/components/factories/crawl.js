(function(){
    'use strict';

    angular.module('misceo')
        .factory('Crawl', ['$http', function($http){
            function create(data){
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

            function getImages(crawlId){
                return $http.get('/images/' + crawlId);
            }

            return {create: create, findAllForUser: findAllForUser, findOne: findOne, remove: remove, getImages:getImages};
        }]);
})();
