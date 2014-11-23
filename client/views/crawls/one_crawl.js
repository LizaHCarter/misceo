(function(){
  'use strict';

  angular.module('misceo')
  .controller('OneCrawlCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams){
    $scope.mode = $state.current.name;
    $scope.crawl = {};
    $scope.crawlID = $stateParams.crawlId;


  }]);
})();
