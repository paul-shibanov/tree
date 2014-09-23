'use strict';

/**
 * @ngdoc function
 * @name treeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the treeApp
 */
angular.module('treeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
