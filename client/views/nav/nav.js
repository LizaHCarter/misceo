(function(){
    'use strict';

    angular.module('misceo')
        .controller('NavCtrl', ['$scope', '$state', 'User', function($scope, $state, User){

          $scope.$on('userName', function(e, userName){
            $scope.userName = userName;
          });

          $scope.logout = function(){
            User.logout().then(function(){
              toastr.success('User successfully logged out.');
              $state.go('home');
            });
          };


        }]);
})();
