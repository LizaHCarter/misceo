(function(){
  'use strict';

  angular.module('misceo')
  .controller('ProfileCtrl', ['$scope', '$state', 'User', function($scope, $state, User){
    $scope.mode = $state.current.name;
    $scope.editMode = false;
    $scope.email = .email;

    //if(!$scope.User.hasEdited){
    //  $scope.editMode = true;
    //}

    $scope.startEditMode = function(){
      $scope.editMode = !$scope.editMode;
    };

    $scope.updateProfile = function(){
      $scope.editMode = false;

      User.updateProfile($scope.User).then(function(res){
        toastr.success('Your profile has been saved');
      });
    };
  }]);
})();
