(function(){
    'use strict';

    angular.module('misceo')
        .controller('NewMsgCtrl', ['$scope', 'User', function($scope, User){
            $scope.title = 'New Message';

            User.allUsers().then(function(response){
                debugger;
                $scope.users = response.data;
            });
        }]);
})();
