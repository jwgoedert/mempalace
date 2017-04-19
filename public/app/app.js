const memoryPal = angular.module('memoryPal', [
  'memoryPal.services',
  'memoryPal.deckCreator',
  'memoryPal.decks',
  'ngRoute',
]);

memoryPal.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/deckCreator', {
      templateUrl: 'app/deckCreator/deckCreator.html',
      controller: 'deckCreatorController',
    })
    .when('/decks', {
      templateUrl: 'app/decks/decks.html',
      controller: 'decksController',
    });
});


