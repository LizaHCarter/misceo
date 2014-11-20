(function(){
  'use strict';

  angular.module('misceo')
  .controller('UsersCtrl', ['$scope', '$state', 'User', function($scope, $state, User){
    $scope.user = {};
    $scope.mode = $state.current.name;
    $scope.register = false;

    $scope.submit = function(){
      if($scope.mode === 'register'){
        User.register($scope.user).then(function(response){
          toastr.success('User successfully registered.');
          $state.go('login');
        }, function(){
          toastr.error('Error during registration.');
          $scope.user = {};
        });
      }else{
        $scope.register = true;
        User.login($scope.user).then(function(response){
          toastr.success('User successfully authenticated.');
          $state.go('home');
        }, function(){
          toastr.error('Error during authentication.');
          $scope.user = {};
        });
      }
    };
  }]);
})();
