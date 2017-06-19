'use strict';

/**
 * @ngdoc directive
 * @name demo4App.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('demo4App')
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  });
