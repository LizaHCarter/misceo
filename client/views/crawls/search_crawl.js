(function(){
  'use strict';

  angular.module('misceo')
  .controller('SearchCrawlCtrl', ['$scope', '$state', '$http', /*'User', */'$location', function($scope, $state, $http, /*User, */$location){
    $scope.mode = $state.current.name;

  }]);
})();
