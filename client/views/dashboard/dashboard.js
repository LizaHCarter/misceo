(function(){
    'use strict';

    angular.module('misceo')
        .controller('DashboardCtrl', ['$scope', '$state', function($scope, $state){
            $scope.mode = $state.current.name;
        }]);
})();
