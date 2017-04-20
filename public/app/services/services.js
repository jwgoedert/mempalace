angular.module('memoryPal.services', [])
  .factory('Decks', function ($http) {
    return {
      getAll: function () {
        return $http({
          method: 'GET',
          url: '/deckCreator',
        }).then(function successCallback(val) {
          console.log("cards! callback", val.data);
          return val.data;
        });
      },
      getDecks: function () {
        return $http({
          method: 'GET',
          url: '/completeddecks',
        }).then(function successCallback(val) {
          console.log("DECKS! callback", val.data);
          return val.data;
        });
      },
    };
  });
