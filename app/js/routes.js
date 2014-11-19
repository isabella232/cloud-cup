"use strict";

angular.module('myApp.routes', ['ngRoute', 'simpleLogin'])

  .constant('ROUTES', {
    '/start': {
      templateUrl: 'partials/start.html',
      controller: 'StartCtrl'
    },
    '/game': {
      templateUrl: 'partials/game.html',
      controller: 'GameCtrl'
    },
  })

  .config(['$routeProvider', 'ROUTES', function($routeProvider, ROUTES) {
    angular.forEach(ROUTES, function(route, path) {
      $routeProvider.when(path, route);
    });
    // routes which are not in our map are redirected to /home
    $routeProvider.otherwise({redirectTo: '/start'});
  }]);
