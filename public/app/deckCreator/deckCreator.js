angular.module('memoryPal.deckCreator', [])

  .controller('deckCreatorController', function ($scope, $window, Decks, $http) { //named Decks after factory tbc
    $scope.data = {};
    $scope.message = 'PERSON-ACTION-OBJECT';
    $scope.remove = (id) => {
      console.log(id);
      $http.delete('/poa/' + id).success((response) => {
        console.log(response);
      });
    };
    $scope.newFunc = (obj) => {
      console.log("NEWFunck", obj);
      $scope.remove(obj);
      $window.location.reload();
    };
    $scope.saveDeck = (deck, deckName) => {
      let newDeck = {
        deckName,
        deck,
      }
      console.log("SAVEDeckName", deckName);
      console.log("SAVEDeck", deck);
      $http({
        method: "POST",
        url: "/completeddecks",
        data: angular.toJson(newDeck),
      }).then((response) => {
        console.log('Success')
        $window.location.reload();
      }).catch((err) => {
        console.log(err);
      });
    };
    Decks.getAll().then(function (decks) {
      $scope.data.decks = decks;
      $scope.phrases = decks.map((el) => {
        return { phrase: `${el.person} ${el.action} a ${el.object}.` };
      });
      if ($scope.phrases.length === 40) {
        $scope.complete = 'You finished your deck!';
      }
      $scope.count = $scope.phrases.length;
      console.log("PHRASEARR DC LENGTH", $scope.phrases.length);
      // console.log("DECKS", $scope.data.decks);
      // console.log("Phrases", $scope.phrases);
    });
  });
