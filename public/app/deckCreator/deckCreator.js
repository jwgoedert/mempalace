angular.module('memoryPal.deckCreator', [])

  .controller('deckCreatorController', function ($scope, Decks) { //named Decks after factory tbc
    $scope.data = {};
    $scope.message = 'PERSON-ACTION-OBJECT';
    $scope.count = 0;
    $scope.newFunc = (obj) => {
      console.log("NEWFunck", obj);
    };
    Decks.getAll().then(function (decks) {
      $scope.data.decks = decks;
      $scope.phrases = decks.map((el) => {
        return { phrase: `${el.person} ${el.action} a ${el.object}.` };
      });
      if ($scope.phrases.length === 40) {
        $scope.complete = 'You finished your deck!';
      }
      console.log("PHRASEARR DC LENGTH", $scope.phrases.length);
      // console.log("DECKS", $scope.data.decks);
      // console.log("Phrases", $scope.phrases);
    });
  });
