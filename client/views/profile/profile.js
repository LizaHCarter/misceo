(function(){
  'use strict';

  angular.module('misceo')
  .controller('ProfileCtrl', ['$scope', '$state', 'User', '$modal', function($scope, $state, User, $modal){
    $scope.user = {};
    User.getProfile().then(function(response){
      console.log(response.data);
      $scope.user = response.data;
    });
    $scope.mode = $state.current.name;
    $scope.editMode = false;

    //if(!$scope.User.hasEdited){
    //  $scope.editMode = true;
    //}

    $scope.startEditMode = function(){
      $scope.editMode = true;
    };

    $scope.updateProfile = function(){
      $scope.editMode = false;
      User.updateProfile($scope.user).then(function(res){
        //console.log($scope.user);
        toastr.success('Your profile has been saved');
      });
    };
    $scope.open = function(){
      $modal.open({
        templateUrl: '/views/webcam/webcam.html',
        controller: 'WebcamCtrl'
      });
    };
  }]);
})();
