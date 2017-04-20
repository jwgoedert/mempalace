angular.module('memoryPal.decks', [])

  .controller('decksController', function ($scope, $window, Decks) { //named Decks after factory tbc
    $scope.data = {};
    $scope.splitData = { people: [], objects: [], actions: [] };
    $scope.newData = { people: [], objects: [], actions: [] };
    $scope.message = 'DECKS';
    Decks.getDecks().then(function (deck) {
      console.log("GETDECKS", deck);
      console.log("GETDECKS", $scope.data.deckarray = deck);
      return $scope.data.deckarray = deck;

    });
    $scope.splitDecks = (coll) => {
      console.log("ALLDECKS", $scope.data.deckarray);
      coll.forEach((deck) => {
        $scope.newData.people = $scope.newData.people.concat(deck.deck.person);
        $scope.newData.objects = $scope.newData.objects.concat(deck.deck.object);
        $scope.newData.actions = $scope.newData.actions.concat(deck.deck.action);
      });
      return $scope.newData;
    };
    $scope.reloadWindow = () => {
      $window.location.reload();
    };
    // $scope.splitDecks($scope.data.deckarray);
    console.log("SHOW ME THE DATA!", $scope.splitData)
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

      return zip(shuffle(data.people), shuffle(data.actions), shuffle(data.objects));

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
      $scope.randomCurrent = $scope.randomDeck($scope.splitData);
      console.log("ANYRANDOM", $scope.randomCurrent);

      console.log("MORERANDOM!", $scope.randomDeck($scope.newData));
    });
    
    
    
    $scope.reRandom = (coll) => {
      $scope.newRandom = $scope.randomDeck(coll);
      $window.location.reload();

    }
  });
