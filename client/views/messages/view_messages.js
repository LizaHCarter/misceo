(function(){
    'use strict';

    angular.module('misceo')
        .controller('ViewMsgsCtrl', ['$scope', 'Message', '$state', function($scope, Message, $state){
            $scope.title = $state.current.name;

            Message.viewMessages().then(function(response){
               $scope.messages = response.data.messages;
            });


        }]);

})();
