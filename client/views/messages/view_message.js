(function(){
    'use strict';

    angular.module('misceo')
        .controller('ViewMsgCtrl', ['$scope', 'Message', '$state','$stateParams',  function($scope, Message, $state, $stateParams){
            $scope.title = $stateParams.messageId;


            Message.oneMessage($stateParams.messageId).then(function(response){
                $scope.message = response.data;
                //debugger;
            }, function(err){
                console.log(err);
            });
        }]);
})();
