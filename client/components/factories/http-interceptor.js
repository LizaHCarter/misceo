(function(){
  'use strict';

  angular.module('misceo')
  .factory('HttpInterceptor', ['$rootScope', '$q', function($rootScope, $q){

    function request(req){
      return req;
    }

    function response(res){
      var userName = res.headers('x-authenticated-user');

      if(userName){
        userName = (userName === 'anonymous') ? null : userName;
        $rootScope.$broadcast('authenticate', userName);
      }

      return res;
    }

    function requestError(req){
      return $q.reject(req);
    }

    function responseError(res){
      // console.log(res);
      if(res.status === 401){
        $rootScope.$broadcast('unauthorized');
      }

      return $q.reject(res);
    }

    return {request:request, response:response, requestError:requestError, responseError:responseError};
  }]);
})();

