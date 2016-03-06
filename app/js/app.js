var app = angular.module("14erApp", ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      .when('/14ers', {
        templateUrl: 'partials/14ersList.html',
        controller: '14erIndexController'
      })
      .when('/14ers/:id', {
        templateUrl: '/partials/14ersShow.html',
        controller: '14erShowController'
      })

    $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

});
