const memoryPal = angular.module('memoryPal', [
  'memoryPal.services',
  'memoryPal.deckCreator',
  'ngRoute',
]);

memoryPal.config(function($routeProvider, $httpProvider){
  $routeProvider
  .when('/deckCreator', {
    templateUrl: 'app/deckCreator/deckCreator.html',
    controller: 'deckCreatorController',
  });
})

