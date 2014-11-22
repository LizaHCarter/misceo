(function(){
    'use strict';

    angular.module('misceo')
        .controller('ViewMsgCtrl', ['$scope', 'Message', '$state','$routeParams',  function($scope, Message, $state, $routeParams){
            $scope.title =$state.current.name;


        }]);
})();
