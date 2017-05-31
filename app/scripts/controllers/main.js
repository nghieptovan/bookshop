'use strict';

/**
 * @ngdoc function
 * @name demo4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demo4App
 */
angular.module('demo4App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
