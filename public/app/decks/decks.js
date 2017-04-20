angular.module('memoryPal.decks', [])

  .controller('decksController', function ($scope, Decks) { //named Decks after factory tbc
    $scope.data = {};
    $scope.splitData = { people: [], objects: [], actions: [] };
    $scope.message = 'DECKS';
    // $scope.remove2 = (id) => {
    //   console.log(id);
    //   $http.delete('/poa/' + id).success((response) => {
    //     console.log(response);
    //   });
    // };
    // $scope.newFunc2 = (obj) => {
    //   console.log("NEWFunck", obj);
    //   $scope.remove(obj);
    //   $window.location.reload();
    // };
    Decks.getDecks().then(function (deck) {
      return $scope.data.deckarray = deck;
    })
    $scope.displayArray = (id) => {
      $scope.data.currentArray = [];
      console.log("DISPLAY", id);
      console.log("DECKINDISPLAY", $scope.data.deckarray);
      $scope.data.deckarray.forEach((deck) => {
        console.log("IDs", deck._id, id);
        if (deck._id === id) {
          $scope.data.currentArray = deck.deck;
        }
      });
      return $scope.data.currentArray
      console.log("RESULTDeck", $scope.data.currentArray);
    };
    $scope.randomDeck = (data) => {
      let shuffle = (arr) => {
        let curr = arr.length, tempVal, randomIndex;
        while (0 !== curr) {
          randomIndex = Math.floor(Math.random() * curr);
          curr -= 1;

          tempVal = arr[curr];
          arr[curr] = arr[randomIndex];
          arr[randomIndex] = tempVal;
        }
        return arr;
      }
      let zip = (a, b, c) => {
        return a.length ?
          [[a[0], b[0], c[0]]].concat(zip(a.slice(1), b.slice(1), c.slice(1))) : [];
      }
      console.log("ZIPPED/SHUFFLED", zip(shuffle(data.people), shuffle(data.actions), shuffle(data.objects)));

    };
    Decks.getAll().then(function (decks) {
      $scope.data.decks = decks;
      $scope.phrases = decks.map((el) => {
        return { phrase: `${el.person} ${el.action} a ${el.object}.` };
      });
      console.log("PHRASEARR LENGTH", $scope.phrases.length);
      $scope.split = $scope.data.decks.forEach((obj) => {
        console.log("OBJinLOOP", obj);
        $scope.splitData.people.push(obj.person);
        $scope.splitData.objects.push(obj.object);
        $scope.splitData.actions.push(obj.action);
      });
      console.log("SPLIT DATA", $scope.splitData);
      console.log("RANDOM!", $scope.randomDeck($scope.splitData));
    });
  });
