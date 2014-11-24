(function(){
  'use strict';

  angular.module('misceo', ['ui.router', 'LocalForageModule'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$localForageProvider', function($stateProvider, $urlRouterProvider, $httpProvider, $localForageProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',         {url:'/',                     templateUrl:'/views/home/home.html',              controller:'HomeCtrl'})
    //- the dashboard state is for testing ability to change states from home to logged in user views
    .state('dashboard',    {url:'/dashboard',            templateUrl:'/views/dashboard/dashboard.html',    controller:'DashboardCtrl'})
    .state('profile',      {url:'/profile',              templateUrl:'/views/profile/profile.html',        controller:'ProfileCtrl'})
    .state('crawl',        {url:'/crawl',                templateUrl:'/views/crawls/search_crawl.html',    controller:'SearchCrawlCtrl'})
    .state('oneCrawl',     {url:'/crawl/{crawlId}',      templateUrl:'/views/crawls/one_crawl.html',       controller:'OneCrawlCtrl'})
    .state('register',     {url:'/register',             templateUrl:'/views/users/users.html',            controller:'UsersCtrl'})
    .state('webcam',       {url:'/webcam',               templateUrl:'/views/webcam/webcam.html',           controller:'WebcamCtrl'})
    .state('viewMessages', {url:'/messages',             templateUrl:'/views/messages/view_messages.html', controller:'ViewMsgsCtrl'})
    .state('newMessage',   {url:'/newmessage',         templateUrl:'/views/messages/new_message.html',   controller:'NewMsgCtrl'})
    .state('viewMessage',  {url:'/messages/{messageId}', templateUrl:'/views/messages/view_message.html',  controller:'ViewMsgCtrl'})
    .state('login',        {url:'/login',                templateUrl:'/views/users/users.html',            controller:'UsersCtrl'})
    .state('logout',       {url:'/logout',               template:'',                                      controller:'UsersCtrl'});

    $localForageProvider.config({name:'misceo', storeName:'cache', version:1.0});
    $httpProvider.interceptors.push('HttpInterceptor');
  }])
  .run(['User', '$rootScope', '$state', function(User, $rootScope, $state){

    $rootScope.$on('unauthorized', function(){
      $state.go('login');
    });

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
