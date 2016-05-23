(function() {
  'use strict';

  angular
    .module('pirates', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: '../views/pirates.html',
        controller: 'PiratesController'
      })
    })

})();
