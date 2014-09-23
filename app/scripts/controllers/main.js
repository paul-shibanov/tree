'use strict';

/**
 * @ngdoc function
 * @name treeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the treeApp
 */
angular.module('treeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
