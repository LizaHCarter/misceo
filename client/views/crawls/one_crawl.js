(function(){
  'use strict';

  angular.module('misceo')
  .controller('OneCrawlCtrl', ['$scope', '$state', '$stateParams', 'Crawl', function($scope, $state, $stateParams, Crawl){
    $scope.mode = $state.current.name;
    $scope.crawl = {};
    $scope.crawlID = $stateParams.crawlId;

    Crawl.findOne($stateParams.crawlId).then(function(response){
      $scope.crawl = response.data.crawl;
    });

    Crawl.getImages($stateParams.crawlId).then(function(response){
      $scope.images = response.data;
    });



  }]);
})();
