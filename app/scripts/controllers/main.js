'use strict';

/**
 * @ngdoc function
 * @name htcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the htcApp
 */
angular.module('htcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
