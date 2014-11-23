(function(){
    'use strict';

    angular.module('misceo')
        .controller('ViewMsgCtrl', ['$scope', 'Message', '$state','$routeParams',  function($scope, Message, $state, $routeParams){
            $scope.title =$state.current.name;

            Message.oneMessage($routeParams.messageId).then(function(response){
                $scope.message = response.data.message;
            });
        }]);
})();
