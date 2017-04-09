'use strict';

/**
 * @ngdoc overview
 * @name periodicTableApp
 * @description
 * # periodicTableApp
 *
 * Main module of the application.
 */
angular
  .module('periodicTableApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
