(function() {
  'use strict';

  angular
    .module('pirates')
    .controller('PiratesController', PiratesController)

    function PiratesController($scope) {
      $scope.vm = {};
      $scope.vm.name = 'Jenni';
    }


})();
