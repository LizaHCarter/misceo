(function(){
  'use strict';

  angular.module('misceo')
  .controller('SearchCrawlCtrl', ['$scope', '$state', '$http', 'User', function($scope, $state, $http, User){
    $scope.mode = $state.current.name;
    $scope.crawl = {};
    $scope.crawls = [];

    //$scope.name = User.getProfile();
    //if(!$scope.name){
    //  $scope.$on('name', function(n, name){
    //    $scope.name = name;
    //    updateCrawls();
    //  });
    //} else {
    //  updateCrawls();
    //}

    //function updateCrawls(){
    //  $http.get('/crawls').then(function(response){
    //    $scope.crawls = response.data.crawls;
    //  });
    //}

    $scope.submit = function(){
      $http.post('/crawls', $scope.search).then(function(response){
        if(response.data.crawl){
          $scope.crawls.push(response.data.crawl);
          $scope.crawl = {};
        }
      });
    };

    $scope.deleteCrawl = function(id){
      $http.delete('/crawls/'+id).then(function(response){
        $scope.crawls = response.data.crawls;
      });
    };

  }]);
})();
