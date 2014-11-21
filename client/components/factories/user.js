(function(){
  'use strict';

  angular.module('misceo')
  .factory('User', ['$http', function($http){

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
    function webcam(pic){
      console.log('here');
      return $http.put('/webcam', pic);
    }
    return {register:register, login:login, logout:logout, updateProfile:updateProfile, getProfile:getProfile, webcam:webcam};
  }]);
})();
