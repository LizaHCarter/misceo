(function(){
  'use strict';

  angular.module('misceo')
  .factory('User', ['$http', '$rootScope', '$localForage', function($http, $rootScope, $localForage){
    var _userName;

    $rootScope.$on('authenticate', function(e, userName){
      setUserName(userName);
    });

    $rootScope.$on('unauthorized', function(){
      setUserName(null);
    });

    function setUserName(userName){
      broadcast(userName);
      return $localForage.setItem('userName', userName);
    }

    function broadcast(userName){
      _userName = userName;
      $rootScope.$broadcast('userName', _userName);
    }

    function getUserFromStorage(){
      $localForage.getItem('userName').then(function(userName){
        broadcast(userName);
      });
    }

    function register(user){
      return $http.post('/register', user);
    }

    function login(user){
      return $http.post('/login', user);
    }

    function logout(){
      return $http.delete('/logout');
    }

    function updateProfile(user){
      return $http.put('/profile', user);
    }

    function getProfile(){
      return $http.get('/profile');
    }

    function webcam(){}

    getUserFromStorage();

    return {register:register, login:login, logout:logout, updateProfile:updateProfile, getProfile:getProfile, webcam:webcam};
  }]);
})();
