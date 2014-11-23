(function(){
  'use strict';

  angular.module('misceo')
  .controller('SearchCrawlCtrl', ['$scope', '$state', '$http', 'User', 'Crawl', function($scope, $state, $http, User, Crawl){
    $scope.mode = $state.current.name;
    $scope.crawl = {};
    $scope.crawls = [];

    $scope.submit = function(){
      $scope.crawl.depth = parseInt($scope.crawl.depth);
      console.log('submit called with payload', $scope.crawl);
      Crawl.create($scope.crawl).then(function(response){
        debugger;
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
