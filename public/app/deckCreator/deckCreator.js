angular.module('memoryPal.deckCreator', [])

.controller('deckCreatorController', function ($scope, Decks) { //named Decks after factory tbc
  $scope.data = {};
  $scope.message = 'PERSON-ACTION-OBJECT';
  Decks.getAll().then(function (decks) {
    $scope.data.decks = decks;
    $scope.phrases = decks.map((el) => {
      return `${el.person} ${el.action} ${el.object}.`
    }); 
    console.log("DECKS",$scope.data.decks);
  });
});
