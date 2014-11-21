(function(){
    'use strict';

    angular.module('misceo')
    .factory('Message', ['$http', function($http){
        function viewMessages(){
            return $http.get('/messages');
        }

        function viewMessage(messageId){
            return $http.get('/messages/'+ messageId);
        }

        function createMessage(message){
            return $http.post('/messages', message);
        }

        return{viewMessages:viewMessages, viewMessage:viewMessage, createMessage:createMessage};
    }]);
})();
