(function(){
    'use strict';

    angular.module('misceo')
        .controller('NewMsgCtrl', ['$scope', 'User', '$http', function($scope, User, $http){
            $scope.title = 'New Message';

            User.allUsers().then(function(response){
                debugger;
                $scope.users = response.data;
            });

            $scope.submit = function(){
                $http.post('/messages').then(function(response){
                    if(response.data.message){
                        $scope.messages.push(response.data.message);
                        $scope.message = {};
                    }
                });
            };

        }]);
})();
