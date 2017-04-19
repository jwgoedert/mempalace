angular.module('memoryPal.deckCreator', [])

  .controller('deckCreatorController', function ($scope, Decks) { //named Decks after factory tbc
    $scope.data = {};
    $scope.message = 'PERSON-ACTION-OBJECT';
    Decks.getAll().then(function (decks) {
      $scope.data.decks = decks;
      $scope.phrases = decks.map((el) => {
        return { phrase: `${el.person} ${el.action} a ${el.object}.` };
      });
      console.log("PHRASEARR LENGTH", $scope.phrases.length);
      // console.log("DECKS", $scope.data.decks);
      // console.log("Phrases", $scope.phrases);
    });
  });
