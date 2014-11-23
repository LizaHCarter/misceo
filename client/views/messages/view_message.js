(function(){
    'use strict';

    angular.module('misceo')
        .controller('ViewMsgCtrl', ['$scope', 'Message', '$state','$stateParams',  function($scope, Message, $state, $stateParams){
<<<<<<< HEAD
            $scope.title =$state.current.name;

            Message.oneMessage($stateParams.messageId).then(function(response){
                $scope.message = response.data.message;
=======
            $scope.title = $stateParams.messageId;


            Message.oneMessage($stateParams.messageId).then(function(response){
                $scope.message = response.data;
                //debugger;
            }, function(err){
                console.log(err);
>>>>>>> c05f64ebc55ab910772ccc77266b01840aa842f0
            });
        }]);
})();
