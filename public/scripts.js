const memoryPal = angular.module('memoryPal', [
  'ngRoute',
]);
memoryPal.controller('mainController', ($scope) => {
  $scope.message = 'you see me?';
  $scope.poas =[{}];
  console.log($scope.message);
});


'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);
