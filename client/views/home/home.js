(function(){
    'use strict';

    angular.module('misceo')
        .controller('HomeCtrl', ['$scope', '$state', function($scope, $state){
            $scope.mode = $state.current.name;

            $scope.$on('userName', function(e, userName){
                $scope.userName = userName;
            });
        }]);
})();
