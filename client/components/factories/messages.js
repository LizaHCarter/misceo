(function(){
    'use strict';

    angular.module('misceo')
    .factory('Message', ['$http', function($http){
        function getMessages(){
            return $http.get('/messages');
        }

        function oneMessage(messageId){
            return $http.get('/messages/'+ messageId);
        }

        function newMessage(message){
            return $http.post('/messages', message);
        }


        return{getMessages:getMessages, oneMessage:oneMessage, newMessage:newMessage};
    }]);
})();
