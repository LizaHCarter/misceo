(function(){
  'use strict';

  angular.module('misceo', ['ui.router', 'LocalForageModule'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$localForageProvider', function($stateProvider, $urlRouterProvider, $httpProvider, $localForageProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',     {url:'/',         templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .state('profile',  {url:'/profile',  templateUrl:'/views/profile/profile.html', controller:'ProfileCtrl'})
    .state('crawl',    {url:'/crawl',   templateUrl:'/views/crawls/search_crawl.html', controller:'SearchCrawlCtrl'})
    .state('register', {url:'/register', templateUrl:'/views/users/users.html', controller:'UsersCtrl'})
    .state('webcam',   {url:'/webcam',   templateUrl:'/views/webcam/webcam.html', controller:'WebcamCtrl'})
    .state('login',    {url:'/login',    templateUrl:'/views/users/users.html', controller:'UsersCtrl'})
    .state('logout',   {url:'/logout',   template:'',                           controller:'UsersCtrl'});

    $localForageProvider.config({name:'misceo', storeName:'cache', version:1.0});
    $httpProvider.interceptors.push('HttpInterceptor');
  }])
  .run(['User', '$rootScope', function(User, $rootScope){

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    });

    $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    });

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
    });

  }]);
})();

