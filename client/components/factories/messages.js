(function(){
    'use strict';

    angular.module('misceo')
    .factory('Message', ['$http', function($http){
        function getMessages(){
            return $http.get('/messages');
        }

        function viewMessage(messageId){
            return $http.get('/messages/'+ messageId);
        }

        function createMessage(message){
            return $http.post('/messages', message);
        }

        return{getMessages:getMessages, viewMessage:viewMessage, createMessage:createMessage};
    }]);
})();
