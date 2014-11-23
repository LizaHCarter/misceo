(function(){
    'use strict';

    angular.module('misceo')
        .controller('ViewMsgCtrl', ['$scope', 'Message', '$state','$stateParams',  function($scope, Message, $state, $stateParams){
            $scope.title =$state.current.name;

            Message.oneMessage($stateParams.messageId).then(function(response){
                $scope.message = response.data.message;
            });
        }]);
})();
